import { ARGBrain } from './src/arg-brain';
import { PluginManager } from './src/plugins/plugin-manager';
import { HumanizationCouncilPlugin } from './src/plugins/humanization-council';
import * as path from 'path';

async function humanizeMamba() {
    const projectRoot = path.join(__dirname);
    const graphifyOut = path.join(projectRoot, 'graphify-out');
    
    // Use the singleton instance
    const brain = ARGBrain.getInstance(graphifyOut);
    const manager = new PluginManager(brain);
    
    // Register the core plugin
    manager.registerPlugin(new HumanizationCouncilPlugin(brain));
    
    const mambaText = `In this work, BabyMamba-HAR is presented, as a framework of two novel lightweight selective state space architectures for efficient human activity recognition. CI-BabyMamba-HAR provides noise robustness through channel independent processing, while Crossover-BiDir-BabyMamba-HAR achieves channel count independent computational complexity through early fusion. Both architectures incorporate weight tied bidirectional scanning and context gated temporal attention pooling. Through evaluation across eight diverse benchmarks, it is demonstrated that Crossover-BiDir-BabyMamba-HAR achieves 86.52% average macro F1-score with ∼27K parameters and 2.21M average MACs, matching established baselines while offering 11× computational reduction on high channel datasets. Systematic ablations establish that bidirectionality (up to +8.42% F1-score) and gated attention (up to +8.94% F1-score) are critical components, while hyperparameters show remarkable robustness in the lightweight regime. These findings provide practical guidance for deploying selective state space models as TinyML backbones for human activity recognition. Future work includes exploration of streaming variants, mixed stems for grouped sensors, and quantization aware training for microcontroller deployment.`;

    console.log("🚀 [HUMANIZER-SUPER] Processing BabyMamba-HAR through v8.0 CORE...");

    const result = await manager.runPlugin('humanization-council', { text: mambaText });

    console.log("\n--- [STEALTH HUMANIZED VERSION] ---");
    console.log(result.humanized);
}

humanizeMamba().catch(console.error);
