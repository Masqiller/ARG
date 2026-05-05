import * as fs from 'fs';
import * as path from 'path';

// ═══════════════════════════════════════════════════════════════════
// AWWESOME RUFLO GRAPHIFY — Massive Obsidian Skill Tree Generator
// Converts the 1400+ skills index into a semantic graph.json
// which Graphify will then compile into an Obsidian Vault.
// ═══════════════════════════════════════════════════════════════════

const SKILLS_INDEX_PATH = '/home/smit/Downloads/Fusion/antigravity-awesome-skills/skills_index.json';
const OUTPUT_DIR = path.join(__dirname, '../graphify-out');
const GRAPH_JSON_PATH = path.join(OUTPUT_DIR, 'skills_graph.json');

interface SkillData {
    id: string;
    category: string;
    name: string;
    description: string;
    risk: string;
    source: string;
}

function generateGraph() {
    console.log(`[1/3] Reading massive skills index from: ${SKILLS_INDEX_PATH}`);
    
    if (!fs.existsSync(SKILLS_INDEX_PATH)) {
        console.error(`❌ Could not find skills_index.json`);
        process.exit(1);
    }

    const skills: SkillData[] = JSON.parse(fs.readFileSync(SKILLS_INDEX_PATH, 'utf-8'));
    console.log(`✅ Loaded ${skills.length} expert skills.`);

    const nodes: any[] = [];
    const links: any[] = [];
    
    // Add central Root Node
    nodes.push({ id: "AWWESOME_SKILL_TREE", type: "root", snippet: "The ultimate 1400+ agent skill repository.", community: "core" });

    const categories = new Set<string>();
    const risks = new Set<string>();

    console.log(`[2/3] Constructing Semantic Skill Graph...`);
    
    for (const skill of skills) {
        // Add Category Node if it doesn't exist
        const catId = `Category: ${skill.category}`;
        if (!categories.has(skill.category)) {
            categories.add(skill.category);
            nodes.push({ id: catId, type: "category", snippet: `All skills related to ${skill.category}`, community: skill.category });
            links.push({ source: "AWWESOME_SKILL_TREE", target: catId, reason: "Contains category" });
        }

        // Add Risk Node if it doesn't exist
        const riskId = `Risk Level: ${skill.risk}`;
        if (!risks.has(skill.risk)) {
            risks.add(skill.risk);
            nodes.push({ id: riskId, type: "risk", snippet: `Skills with risk level: ${skill.risk}`, community: "security" });
        }

        // Add Skill Node
        nodes.push({
            id: skill.id,
            name: skill.name,
            snippet: skill.description,
            community: skill.category
        });

        // Link Skill to Category
        links.push({ source: catId, target: skill.id, reason: "Belongs to category" });
        
        // Link Skill to Risk Profile
        links.push({ source: skill.id, target: riskId, reason: `Has risk profile: ${skill.risk}` });
    }

    // Write Obsidian Vault
    const OBSIDIAN_DIR = path.join(OUTPUT_DIR, 'obsidian');
    if (fs.existsSync(OBSIDIAN_DIR)) fs.rmSync(OBSIDIAN_DIR, { recursive: true, force: true });
    fs.mkdirSync(OBSIDIAN_DIR, { recursive: true });
    
    // Create folders for organization
    fs.mkdirSync(path.join(OBSIDIAN_DIR, 'Skills'));
    fs.mkdirSync(path.join(OBSIDIAN_DIR, 'Categories'));
    fs.mkdirSync(path.join(OBSIDIAN_DIR, 'Risk Profiles'));
    fs.mkdirSync(path.join(OBSIDIAN_DIR, 'Core'));

    console.log(`[3/3] Compiling Obsidian Vault...`);

    // Helper to write md
    const writeNode = (folder: string, title: string, content: string, links: string[]) => {
        // Sanitize title for filename
        const filename = title.replace(/[/\\?%*:|"<>]/g, '-');
        let md = `# ${title}\n\n${content}\n\n## Connections\n`;
        for (const l of links) {
            md += `- [[${l.replace(/[/\\?%*:|"<>]/g, '-')}]]\n`;
        }
        fs.writeFileSync(path.join(OBSIDIAN_DIR, folder, `${filename}.md`), md);
    };

    // Root Node
    const rootLinks = nodes.filter(n => n.type === 'category').map(n => n.id);
    writeNode('Core', 'AWWESOME_SKILL_TREE', 'The ultimate 1400+ agent skill repository.', rootLinks);

    // Categories
    for (const cat of categories) {
        const catId = `Category: ${cat}`;
        const catSkills = skills.filter(s => s.category === cat).map(s => s.id);
        writeNode('Categories', catId, `All skills related to ${cat}`, ['AWWESOME_SKILL_TREE', ...catSkills]);
    }

    // Risk Profiles
    for (const risk of risks) {
        const riskId = `Risk Level: ${risk}`;
        const riskSkills = skills.filter(s => s.risk === risk).map(s => s.id);
        writeNode('Risk Profiles', riskId, `Skills with risk level: ${risk}`, riskSkills);
    }

    // Skills
    for (const skill of skills) {
        const links = [
            `Category: ${skill.category}`,
            `Risk Level: ${skill.risk}`
        ];
        writeNode('Skills', skill.id, `**Name**: ${skill.name}\n**Source**: ${skill.source}\n\n${skill.description}`, links);
    }
    
    // ── Framework Codebases (Ruflo & Graphify) ──
    console.log(`[4/4] Ingesting Framework Codebases...`);
    fs.mkdirSync(path.join(OBSIDIAN_DIR, 'Frameworks'));
    
    const frameworkLinks: string[] = [];
    
    const ingestFramework = (frameworkName: string, rootDir: string) => {
        let fileCount = 0;
        const walkSync = (dir: string) => {
            if (!fs.existsSync(dir)) return;
            const files = fs.readdirSync(dir);
            for (const file of files) {
                if (file.startsWith('.') || file === 'node_modules' || file === 'dist' || file === '__pycache__') continue;
                const filepath = path.join(dir, file);
                const stat = fs.statSync(filepath);
                if (stat.isDirectory()) {
                    walkSync(filepath);
                } else {
                    // It's a file, make a node
                    const relPath = path.relative(rootDir, filepath);
                    const nodeId = `[${frameworkName}] ${relPath}`;
                    writeNode('Frameworks', nodeId, `Source file from ${frameworkName} framework.\nPath: \`${relPath}\``, ['AWWESOME_SKILL_TREE']);
                    frameworkLinks.push(nodeId);
                    fileCount++;
                }
            }
        };
        walkSync(rootDir);
        console.log(`✅ Ingested ${fileCount} files from ${frameworkName}`);
    };

    ingestFramework('Ruflo', '/home/smit/Downloads/Fusion/ruflo');
    ingestFramework('Graphify', '/home/smit/Downloads/Fusion/graphify');
    
    // Update Root node to point to frameworks too
    writeNode('Core', 'AWWESOME_SKILL_TREE', 'The ultimate 1400+ agent skill repository and integrated framework architecture.', [...rootLinks, ...frameworkLinks.slice(0, 50)]); // linking first 50 to avoid massive root page

    console.log(`✅ Generated Semantic Graph with ${nodes.length} nodes and ${links.length} edges.`);
    console.log(`✅ Obsidian Vault compiled successfully at: ${OBSIDIAN_DIR}`);
    console.log(`\n🚀 Open Obsidian, click "Open folder as vault", and select: ${OBSIDIAN_DIR}`);
}

generateGraph();
