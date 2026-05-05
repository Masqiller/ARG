import { recommendSkillsForTask } from '../src/skill-mapper';
import * as path from 'path';

// Dogfooding ARG to find out how to build ARG
const TASK = "Build an autonomous vibe coding router and unified memory brain that saves 95% tokens using context pruning and dynamic swarm orchestration.";
const GRAPH_DIR = path.join(__dirname, '../graphify-out');

console.log(`🧠 [ARG DOGFOODING] Querying AWWESOME Skills for: "${TASK}"\n`);
const skills = recommendSkillsForTask(GRAPH_DIR, TASK);

console.log(`🔥 Top Recommended Playbooks for this architecture:`);
skills.slice(0, 5).forEach((s, i) => {
    console.log(`  ${i+1}. ${s.skill} (Score: ${s.score})`);
});
