import json
import sqlite3
import os
import sys
import time

def import_skills():
    # Paths
    vectors_path = "graphify-out/universal_skills_with_vectors.json"
    db_path = ".swarm/memory.db"

    if not os.path.exists(vectors_path):
        print(f"Error: Vectors file not found at {vectors_path}")
        sys.exit(1)
        
    if not os.path.exists(db_path):
        print(f"Error: Database not found at {db_path}")
        sys.exit(1)

    print(f"Loading skills from {vectors_path}...")
    with open(vectors_path, 'r', encoding='utf-8') as f:
        skills = json.load(f)

    print(f"Loaded {len(skills)} skills.")
    print(f"Connecting to database at {db_path}...")
    
    conn = sqlite3.connect(db_path)
    cursor = conn.cursor()

    success_count = 0
    start_time = time.time()

    print("Importing skills into memory_entries...")
    for skill in skills:
        name = skill.get("name")
        description = skill.get("description")
        embedding = skill.get("embedding")
        path = skill.get("path")
        stars = skill.get("stars", 0)

        if not embedding:
            continue

        # Create a unique ID
        skill_id = f"skill_{int(time.time() * 1000)}_{success_count}"
        
        # Format the content to include instructions path
        content = f"{description}\n\nPath: {path}\nStars: {stars}"
        
        # Convert embedding list to JSON string
        embedding_str = json.dumps(embedding)

        try:
            # Insert or replace
            cursor.execute("""
                INSERT OR REPLACE INTO memory_entries (
                    id, key, namespace, content, type, embedding, 
                    embedding_model, embedding_dimensions, tags, created_at, updated_at, status
                ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
            """, (
                skill_id,
                name,
                "skills", # Put them in a dedicated 'skills' namespace
                content,
                "semantic",
                embedding_str,
                "Xenova/all-MiniLM-L6-v2",
                384,
                f"stars:{stars}",
                int(time.time() * 1000),
                int(time.time() * 1000),
                "active"
            ))
            success_count += 1
        except Exception as e:
            print(f"Error inserting {name}: {e}")

    conn.commit()
    conn.close()

    elapsed = time.time() - start_time
    print(f"\n🎉 Successfully imported {success_count} skills into AgentDB!")
    print(f"Time taken: {elapsed:.2f} seconds.")

if __name__ == "__main__":
    import_skills()
