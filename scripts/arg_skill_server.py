import json
import sys
from pathlib import Path

def load_registry(path: str) -> list:
    try:
        with open(path, 'r', encoding='utf-8') as f:
            return json.load(f)
    except Exception as e:
        print(f"Error loading registry: {e}", file=sys.stderr)
        sys.exit(1)

def serve(registry_path: str = "graphify-out/universal_skills.json"):
    try:
        from mcp.server import Server
        from mcp.server.stdio import stdio_server
        from mcp import types
        import asyncio
    except ImportError:
        print("mcp library not found. Please install it with: pip install mcp", file=sys.stderr)
        sys.exit(1)

    registry = load_registry(registry_path)
    server = Server("arg-skill-server")

    # Auto-Initialization: Check if database exists
    script_dir = Path(__file__).parent.parent
    db_path = script_dir / ".swarm" / "memory.db"
    if not db_path.exists():
        print(f"Database not found at {db_path}. Initializing...", file=sys.stderr)
        import subprocess
        try:
            subprocess.run([sys.executable, str(script_dir / "scripts" / "arg_import_skills_to_db.py")], check=True)
        except Exception as e:
            print(f"Error initializing database: {e}", file=sys.stderr)

    def _log_to_session(text: str):
        import sqlite3
        import time
        
        db_path = str(Path.home() / ".claude-mem" / "claude-mem.db")
        
        try:
            conn = sqlite3.connect(db_path)
            cursor = conn.cursor()
            
            # Find active session
            cursor.execute("SELECT memory_session_id FROM sdk_sessions WHERE status='active' ORDER BY started_at_epoch DESC LIMIT 1")
            row = cursor.fetchone()
            
            if row:
                session_id = row[0]
                
                # Check if row exists in session_summaries
                cursor.execute("SELECT id, investigated FROM session_summaries WHERE memory_session_id=?", (session_id,))
                summary_row = cursor.fetchone()
                
                if summary_row:
                    row_id, investigated = summary_row
                    new_investigated = (investigated + "\n" + text) if investigated else text
                    cursor.execute("UPDATE session_summaries SET investigated=? WHERE id=?", (new_investigated, row_id))
                else:
                    # Insert new row
                    now = time.strftime('%Y-%m-%dT%H:%M:%SZ')
                    now_epoch = int(time.time())
                    cursor.execute("""
                        INSERT INTO session_summaries 
                        (memory_session_id, project, request, investigated, created_at, created_at_epoch)
                        VALUES (?, ?, ?, ?, ?, ?)
                    """, (session_id, "smit", "ARG Session", text, now, now_epoch))
                    
                conn.commit()
            conn.close()
        except Exception as e:
            print(f"Error logging to session: {e}", file=sys.stderr)

    # Auto-Resuming: Log startup to session
    _log_to_session("ARG Server started and linked to session.")

    @server.list_tools()
    async def list_tools() -> list[types.Tool]:
        return [
            types.Tool(
                name="search_skills",
                description="Search for available skills by keyword in name, description, or tags. Returns results sorted by popularity (stars).",
                inputSchema={
                    "type": "object",
                    "properties": {
                        "query": {"type": "string", "description": "Keyword to search for"}
                    },
                    "required": ["query"],
                },
            ),
            types.Tool(
                name="vector_search_skills",
                description="Search for available skills using semantic vector search (Ruflo engine). Finds conceptually similar skills even if keywords don't match.",
                inputSchema={
                    "type": "object",
                    "properties": {
                        "query": {"type": "string", "description": "Semantic query to search for"}
                    },
                    "required": ["query"],
                },
            ),
            types.Tool(
                name="get_skill",
                description="Get the full content and instructions of a skill by its exact name.",
                inputSchema={
                    "type": "object",
                    "properties": {
                        "name": {"type": "string", "description": "Exact name of the skill"}
                    },
                    "required": ["name"],
                },
            ),
            types.Tool(
                name="start_swarm_task",
                description="Start a swarm of agents to execute a specific objective or task.",
                inputSchema={
                    "type": "object",
                    "properties": {
                        "objective": {"type": "string", "description": "The objective or task for the swarm to execute"},
                        "strategy": {"type": "string", "description": "Execution strategy (optional)"}
                    },
                    "required": ["objective"],
                },
            ),
            types.Tool(
                name="query_knowledge_graph",
                description="Query the Graphify knowledge graph for connections and insights about skills.",
                inputSchema={
                    "type": "object",
                    "properties": {
                        "question": {"type": "string", "description": "The question to ask the graph"}
                    },
                    "required": ["question"],
                },
            ),
            types.Tool(
                name="find_skill_path",
                description="Find the shortest path between two skills in the knowledge graph.",
                inputSchema={
                    "type": "object",
                    "properties": {
                        "skill_a": {"type": "string", "description": "First skill"},
                        "skill_b": {"type": "string", "description": "Second skill"}
                    },
                    "required": ["skill_a", "skill_b"],
                },
            ),
            types.Tool(
                name="explain_skill",
                description="Get a plain-language explanation of a skill and its neighbors from the graph.",
                inputSchema={
                    "type": "object",
                    "properties": {
                        "skill_name": {"type": "string", "description": "Name of the skill to explain"}
                    },
                    "required": ["skill_name"],
                },
            ),
            types.Tool(
                name="consolidate_session_memory",
                description="Consolidate session memories from Ruflo and Graphify and save them to Claude-Mem.",
                inputSchema={
                    "type": "object",
                    "properties": {},
                },
            ),
        ]




    def _search_skills(arguments: dict) -> str:
        query = arguments["query"].lower()
        _log_to_session(f"Searched skills for: {query}")
        matched_skills = []

        
        for skill in registry:
            name = skill.get("name", "").lower()
            desc = skill.get("description", "").lower()
            keywords = skill.get("keywords", [])
            
            # Search in name, description, and keywords
            if query in name or query in desc or any(query in kw.lower() for kw in keywords):
                matched_skills.append(skill)
        
        # Sort by stars (highest first)
        matched_skills.sort(key=lambda x: x.get("stars", 0), reverse=True)
        
        if not matched_skills:
            return f"No skills found matching '{query}'."
            
        results = []
        for skill in matched_skills:
            results.append(f"- **{skill.get('name')}** (⭐ {skill.get('stars')}): {skill.get('description')} (Trigger: {skill.get('trigger')})")
        
        return "\n".join(results)

    def _get_skill(arguments: dict) -> str:
        name = arguments["name"].lower()
        _log_to_session(f"Retrieved skill: {name}")
        for skill in registry:

            if skill.get("name", "").lower() == name:
                path_str = skill.get("path")
                try:
                    with open(path_str, 'r', encoding='utf-8') as f:
                        return f.read()
                except Exception as e:
                    return f"Error reading skill file: {e}"
        return f"Skill '{name}' not found in registry."

    def _vector_search_skills(arguments: dict) -> str:
        query = arguments["query"]
        _log_to_session(f"Vector searched skills for: {query}")
        import subprocess

        
        try:
            # Run the Ruflo CLI search
            result = subprocess.check_output(
                ["npx", "@claude-flow/cli@latest", "memory", "search", "--query", query, "--namespace", "skills"],
                stderr=subprocess.STDOUT,
                text=True
            )
            return result
        except subprocess.CalledProcessError as e:
            return f"Error running vector search: {e.output}"
        except Exception as e:
            return f"Error: {e}"


    def _start_swarm_task(arguments: dict) -> str:
        objective = arguments["objective"]
        strategy = arguments.get("strategy")
        import subprocess
        
        cmd = ["npx", "@claude-flow/cli@latest", "swarm", "start", "-o", objective]
        if strategy:
            cmd.extend(["-s", strategy])
            
        try:
            result = subprocess.check_output(
                cmd,
                stderr=subprocess.STDOUT,
                text=True
            )
            return result
        except subprocess.CalledProcessError as e:
            return f"Error starting swarm: {e.output}"
        except Exception as e:
            return f"Error: {e}"

    def _query_knowledge_graph(arguments: dict) -> str:
        question = arguments["question"]
        _log_to_session(f"Queried knowledge graph: {question}")
        import subprocess
        
        try:
            result = subprocess.check_output(
                ["graphify", "query", question],
                stderr=subprocess.STDOUT,
                text=True
            )
            return result
        except subprocess.CalledProcessError as e:
            return f"Error querying graph: {e.output}"
        except Exception as e:
            return f"Error: {e}"

    def _find_skill_path(arguments: dict) -> str:
        skill_a = arguments["skill_a"]
        skill_b = arguments["skill_b"]
        _log_to_session(f"Found path between: {skill_a} and {skill_b}")
        import subprocess
        
        try:
            result = subprocess.check_output(
                ["graphify", "path", skill_a, skill_b],
                stderr=subprocess.STDOUT,
                text=True
            )
            return result
        except subprocess.CalledProcessError as e:
            return f"Error finding path: {e.output}"
        except Exception as e:
            return f"Error: {e}"

    def _explain_skill(arguments: dict) -> str:
        skill_name = arguments["skill_name"]
        _log_to_session(f"Explained skill: {skill_name}")
        import subprocess
        
        try:
            result = subprocess.check_output(
                ["graphify", "explain", skill_name],
                stderr=subprocess.STDOUT,
                text=True
            )
            return result
        except subprocess.CalledProcessError as e:
            return f"Error explaining skill: {e.output}"
        except Exception as e:
            return f"Error: {e}"

    def _consolidate_session_memory(arguments: dict) -> str:
        import sqlite3
        import time
        import subprocess
        import re
        
        db_path = str(Path.home() / ".claude-mem" / "claude-mem.db")
        
        try:
            conn = sqlite3.connect(db_path)
            cursor = conn.cursor()
            
            # Find active session
            cursor.execute("SELECT memory_session_id FROM sdk_sessions WHERE status='active' ORDER BY started_at_epoch DESC LIMIT 1")
            row = cursor.fetchone()
            
            if not row:
                return "No active session found in Claude-Mem."
                
            session_id = row[0]
            
            # Read investigated skills from session_summaries
            cursor.execute("SELECT investigated FROM session_summaries WHERE memory_session_id=?", (session_id,))
            summary_row = cursor.fetchone()
            
            investigated_text = summary_row[0] if summary_row else ""
            
            if not investigated_text:
                return "No skills investigated in this session yet."
                
            # Extract queries or skill names (simple regex for lines starting with "Retrieved skill:" or "Searched skills for:")
            skills_found = re.findall(r"Retrieved skill: (.+)", investigated_text)
            queries_found = re.findall(r"Searched skills for: (.+)", investigated_text)
            
            all_terms = list(set(skills_found + queries_found))
            
            if not all_terms:
                return "No specific skills or queries extracted from session history."
                
            # Use Ruflo Technique: Vector Search for related concepts
            ruflo_insights = []
            for term in all_terms[:2]: # Limit to top 2 to avoid long runs
                try:
                    res = subprocess.check_output(
                        ["npx", "@claude-flow/cli@latest", "memory", "search", "--query", term, "--namespace", "skills"],
                        stderr=subprocess.STDOUT,
                        text=True
                    )
                    # Extract top result line (usually formatted as list)
                    lines = res.split('\n')
                    top_res = [l for l in lines if l.strip().startswith('-')]
                    if top_res:
                        ruflo_insights.append(f"Ruflo found skills related to '{term}': {top_res[0]}")
                except:
                    pass
                    
            # Use Graphify Technique: Explain or Query
            graphify_insights = []
            for term in all_terms[:1]: # Limit to top 1
                try:
                    res = subprocess.check_output(
                        ["graphify", "explain", term],
                        stderr=subprocess.STDOUT,
                        text=True
                    )
                    # Get the first paragraph or summary
                    paragraphs = res.split('\n\n')
                    if paragraphs:
                        graphify_insights.append(f"Graphify explanation for '{term}': {paragraphs[0].strip()}")
                except:
                    pass
                    
            # Combine into Claude-Mem Observation
            facts = f"Investigated Terms: {', '.join(all_terms)}\n\n"
            facts += "\n".join(ruflo_insights) + "\n\n"
            facts += "\n".join(graphify_insights)
            
            narrative = f"Consolidated session memory using Ruflo vector search and Graphify graph topology for session {session_id}."
            concepts = "SessionMemory, Ruflo, Graphify, Unification"
            
            now = time.strftime('%Y-%m-%dT%H:%M:%SZ')
            now_epoch = int(time.time())
            
            # Insert into observations
            cursor.execute("""
                INSERT INTO observations 
                (memory_session_id, project, type, title, text, facts, narrative, concepts, created_at, created_at_epoch)
                VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
            """, (session_id, "smit", "session_insight", "Consolidated Session Memory", facts, facts, narrative, concepts, now, now_epoch))
            
            conn.commit()
            conn.close()
            
            return f"Successfully consolidated memory for session {session_id} into Claude-Mem observations."
        except Exception as e:
            return f"Error consolidating memory: {e}"

    _handlers = {
        "search_skills": _search_skills,
        "get_skill": _get_skill,
        "vector_search_skills": _vector_search_skills,
        "start_swarm_task": _start_swarm_task,
        "query_knowledge_graph": _query_knowledge_graph,
        "find_skill_path": _find_skill_path,
        "explain_skill": _explain_skill,
        "consolidate_session_memory": _consolidate_session_memory,
    }




    @server.call_tool()
    async def call_tool(name: str, arguments: dict) -> list[types.TextContent]:
        import os
        script_dir = Path(__file__).parent.parent.resolve()
        current_dir = Path(os.getcwd()).resolve()
        
        # Allow if in repo, in a subfolder of repo, or in the parent folder containing the repo!
        is_allowed = (current_dir == script_dir or 
                      script_dir in current_dir.parents or 
                      (current_dir / "awwesome-ruflo-graphify").exists())
                      
        if not is_allowed:
            return [types.TextContent(type="text", text=f"Tool {name} is only available when working inside the ARG workspace ({script_dir}) or its parent project directory. Current directory: {current_dir}")]
            
        handler = _handlers.get(name)
        if not handler:
            return [types.TextContent(type="text", text=f"Unknown tool: {name}")]
        try:
            return [types.TextContent(type="text", text=handler(arguments))]
        except Exception as exc:
            return [types.TextContent(type="text", text=f"Error executing {name}: {exc}")]

    async def main():
        async with stdio_server() as streams:
            await server.run(streams[0], streams[1], server.create_initialization_options())

    asyncio.run(main())

if __name__ == "__main__":
    script_dir = Path(__file__).parent.parent
    parent_dir = script_dir.parent
    default_path = parent_dir / "graphify-out" / "universal_skills.json"
    if not default_path.exists():
        default_path = script_dir / "graphify-out" / "universal_skills.json"
    default_path = str(default_path)
    registry_path = sys.argv[1] if len(sys.argv) > 1 else default_path
    serve(registry_path)
