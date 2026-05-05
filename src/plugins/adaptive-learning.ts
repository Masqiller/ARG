import { ARGPlugin } from './plugin-manager';
import { ARGBrain } from '../arg-brain';
import * as fs from 'fs';
import * as path from 'path';

export class AdaptiveLearningPlugin implements ARGPlugin {
    name = 'adaptive-learning';
    description = 'Analyzes task execution to dynamically adjust skill weights, allowing Ruflo to learn from past successes and failures.';
    
    private brain: ARGBrain;
    private projectRoot: string;

    constructor(brain: ARGBrain, projectRoot: string) {
        this.brain = brain;
        this.projectRoot = projectRoot;
    }

    async execute(context: { task: string, skillsUsed: string[], durationMs?: number, prunedNodes?: number }): Promise<any> {
        console.log(`\n🧠 [ADAPTIVE LEARNING] Initiating post-execution self-reflection...`);
        
        const weightsFile = path.join(this.projectRoot, 'logs/skill_weights.json');
        
        // Ensure logs directory exists
        const logsDir = path.dirname(weightsFile);
        if (!fs.existsSync(logsDir)) {
            fs.mkdirSync(logsDir, { recursive: true });
        }

        let weights: Record<string, number> = {};
        if (fs.existsSync(weightsFile)) {
            weights = JSON.parse(fs.readFileSync(weightsFile, 'utf-8'));
        }

        // Calculate a basic "success/fitness" delta based on execution metrics
        // In a real scenario, this would evaluate actual success/failure hooks or user feedback.
        // For this implementation, we evaluate efficiency: fast execution + high pruning = good.
        let performanceDelta = 0.5; // Base increment for completing the task without crashing
        
        if (context.prunedNodes !== undefined) {
            if (context.prunedNodes > 1000) performanceDelta += 0.5; // Highly efficient context pruning
            if (context.prunedNodes < 10) performanceDelta -= 0.5;  // Poor pruning
        }
        
        if (context.durationMs !== undefined) {
            if (context.durationMs < 5000) performanceDelta += 0.2; // Fast
            if (context.durationMs > 20000) performanceDelta -= 0.2; // Slow
        }

        console.log(`   ↳ Evaluated Performance Delta: ${performanceDelta > 0 ? '+' : ''}${performanceDelta}`);

        // Update weights for the skills used in this task
        for (const skill of context.skillsUsed) {
            const currentWeight = weights[skill] || 1.0; // Default base multiplier is 1.0
            
            // Apply delta, clamped between 0.1 (hated) and 5.0 (loved)
            let newWeight = currentWeight + (performanceDelta * 0.1); // Small incremental learning
            newWeight = Math.max(0.1, Math.min(5.0, newWeight));
            
            weights[skill] = parseFloat(newWeight.toFixed(2));
            console.log(`   ↳ Adjusted weight for '${skill}': ${currentWeight.toFixed(2)} ➡️ ${newWeight.toFixed(2)}`);
        }

        // Save the learned weights
        fs.writeFileSync(weightsFile, JSON.stringify(weights, null, 2));

        // Push a lesson learned to Claude-Mem
        try {
            const { spawnSync } = require('child_process');
            const memCliPath = path.join(this.projectRoot, 'vendor/claude-mem/dist/npx-cli/index.js');
            const lesson = `Ruflo Adaptive Learning: The playbook combination [${context.skillsUsed.join(', ')}] achieved a performance delta of ${performanceDelta} on the task: "${context.task}". Weights updated.`;
            spawnSync('node', [memCliPath, 'add', lesson]);
            console.log(`✅ [ADAPTIVE LEARNING] Encoded lesson into Long-Term Memory.`);
        } catch (e) {
            // Ignore mem-cli errors if it's not running
        }

        return { status: "success", updatedWeights: weights };
    }
}
