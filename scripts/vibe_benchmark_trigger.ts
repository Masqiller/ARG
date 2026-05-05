import { VibeRouter } from '../src/vibe-router';
import * as path from 'path';
import { execSync } from 'child_process';

const BENCHMARK_PROMPT = "Execute the Python empirical benchmark suite to generate Matplotlib graphs comparing ARG token overhead, execution time, and relevance against vanilla Ruflo and Graphify.";

console.log("=====================================================");
console.log("🤖 DOGFOODING: ARG Vibe Router Launching Benchmark");
console.log("=====================================================\n");

// Initialize Router
const graphDir = path.join(__dirname, '../graphify-out');
const router = new VibeRouter(graphDir);

// 1. Let the router do its autonomous pruning and decision making
router.executeVibe(BENCHMARK_PROMPT);

// 2. Simulate the Agent Execution of the Python script
console.log("\n[AGENT: DATA SCIENTIST] -> Executing assigned playbooks and generating metrics...");
try {
    const pythonScript = path.join(__dirname, 'benchmark_arg.py');
    const output = execSync(`python3 ${pythonScript}`).toString();
    console.log(output);
} catch (error: any) {
    console.error("❌ Failed to execute Python benchmarking script:", error.message);
}

console.log("=====================================================");
console.log("✅ VIBE ROUTER BENCHMARK EXECUTION COMPLETE");
console.log("=====================================================\n");
