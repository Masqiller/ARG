import { VibeRouter, EvolutionOverrides } from '../src/vibe-router';
import { listAllSkills, ScoredSkill } from '../src/skill-mapper';
import * as path from 'path';
import * as fs from 'fs';

// Setup
const graphDir = path.join(__dirname, '../../graphify-out');
const projectRoot = path.join(__dirname, '../../');
const router = new VibeRouter(graphDir, projectRoot);

const allSkills = listAllSkills();
const args = process.argv.slice(2);
const isTestMode = args.includes('--test-cycles');
const maxCycles = isTestMode ? parseInt(args[args.indexOf('--test-cycles') + 1]) || 3 : Infinity;

const baseScenarios = [
    "Refactor the memory bus and sync it to claude-mem",
    "Audit the N8N mcp configurations for security vulnerabilities",
    "Implement an automated email triage workflow using N8N",
    "Perform a deep semantic search across the entire codebase to detect dead code",
    "Deploy a highly secure microservice with auto-scaling capabilities"
];

function getRandomItems<T>(arr: T[], count: number): T[] {
    const shuffled = [...arr].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}

function generateMutatedConfig(): EvolutionOverrides {
    const numSkills = Math.floor(Math.random() * 5) + 3; // 3 to 7 skills
    const randomSkills = getRandomItems(allSkills, numSkills).map(s => ({
        skill: s,
        score: 10,
        category: 'experimental',
        reason: 'evolution-mutation'
    } as ScoredSkill));

    const forcedAgents = Math.floor(Math.random() * 10) + 1; // 1 to 10 agents
    const isSwarm = Math.random() > 0.5;

    return {
        forcedSkills: randomSkills,
        forcedAgents: forcedAgents,
        forcedSwarmMode: isSwarm,
        forcedCouncilMode: !isSwarm && forcedAgents > 1
    };
}

async function runEvolutionLoop() {
    console.log("=====================================================");
    console.log("🧬 ARG EVOLUTION ENGINE: Continuous Self-Play Loop");
    console.log(`🧠 Skill Pool: ${allSkills.length} available playbooks`);
    console.log("=====================================================\n");

    const winnersFile = path.join(projectRoot, 'logs/evolution_winners.json');
    if (!fs.existsSync(path.join(projectRoot, 'logs'))) {
        fs.mkdirSync(path.join(projectRoot, 'logs'), { recursive: true });
    }

    let winners: any[] = [];
    if (fs.existsSync(winnersFile)) {
        winners = JSON.parse(fs.readFileSync(winnersFile, 'utf-8'));
    }

    let bestScore = 0;
    let cyclesSinceImprovement = 0;
    const MAX_STAGNATION = 15;

    let cycle = 1;
    while (cycle <= maxCycles) {
        console.log(`\n\n[EVOLUTION CYCLE ${cycle}] --------------------------------`);
        
        const scenario = baseScenarios[Math.floor(Math.random() * baseScenarios.length)];
        const config = generateMutatedConfig();
        
        console.log(`🧪 Testing Mutation:`);
        console.log(`   ↳ Scenario: ${scenario}`);
        console.log(`   ↳ Skills: ${config.forcedSkills?.map(s => s.skill).join(', ')}`);
        console.log(`   ↳ Agents: ${config.forcedAgents} (Swarm: ${config.forcedSwarmMode})`);

        try {
            const metrics = await router.executeVibe(scenario, { overrides: config });
            
            // Fitness Score: Context pruned (more is better) / Duration (less is better)
            // We use prunedNodes as the primary fitness metric for this structural evaluation.
            const fitnessScore = metrics.prunedNodes * 10;
            
            console.log(`\n🏅 Run completed. Fitness Score: ${fitnessScore}`);

            if (fitnessScore > bestScore) {
                console.log(`📈 NEW BEST SCORE: ${fitnessScore} (beat previous ${bestScore})`);
                bestScore = fitnessScore;
                cyclesSinceImprovement = 0;
                
                console.log(`🌟 HIGH FITNESS DETECTED. Saving mutation playbook.`);
                winners.push({
                    timestamp: new Date().toISOString(),
                    scenario,
                    config: {
                        skills: config.forcedSkills?.map(s => s.skill),
                        agents: config.forcedAgents,
                        swarmMode: config.forcedSwarmMode
                    },
                    score: fitnessScore
                });

                fs.writeFileSync(winnersFile, JSON.stringify(winners, null, 2));
            } else {
                cyclesSinceImprovement++;
                console.log(`📉 No improvement. Stagnation counter: ${cyclesSinceImprovement}/${MAX_STAGNATION}`);
            }

            if (cyclesSinceImprovement >= MAX_STAGNATION) {
                console.log(`\n🛑 TERMINATING EVOLUTION LOOP: Stagnation plateau reached. Engine found local maxima.`);
                break;
            }

        } catch (error: any) {
            console.error(`❌ Cycle failed during execution: ${error.message}`);
        }

        cycle++;
        
        if (cycle <= maxCycles) {
            console.log("⏳ Cooling down for 3 seconds before next mutation...");
            await new Promise(resolve => setTimeout(resolve, 3000));
        }
    }

    console.log(`\n✅ Evolution Loop finished. Tested ${cycle - 1} mutations.`);
}

runEvolutionLoop().catch(console.error);
