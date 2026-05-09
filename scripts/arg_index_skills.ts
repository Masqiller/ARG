import fs from 'fs';
// @ts-ignore
import ruvector from 'ruvector';

/**
 * 🌪️ ARG SKILL INDEXER
 * Task: Generate real ONNX embeddings for skills using Ruflo's engine.
 */
async function testIndexer() {
    console.log("🌪️ ARG SKILL INDEXER ONLINE.");

    try {
        // Initialize the ONNX embedder
        console.log("Initializing ONNX embedder (this may download the model if not present)...");
        if (typeof ruvector.initOnnxEmbedder === 'function') {
            await ruvector.initOnnxEmbedder();
        } else {
            console.log("initOnnxEmbedder not found, attempting to use embed directly...");
        }

        const testTexts = [
            "Fix bugs, errors, and track stack traces in code",
            "Write documentation, README files, and guides"
        ];

        console.log("Generating embeddings...");
        if (typeof ruvector.embedBatch === 'function') {
            const vectors = await ruvector.embedBatch(testTexts);
            console.log(`Success! Generated ${vectors.length} vectors.`);
            console.log(`Vector 1 dimensions: ${vectors[0].length}`);
            console.log(`Vector 1 sample: [${vectors[0].slice(0, 5).join(', ')}...]`);
        } else if (typeof ruvector.embed === 'function') {
            const v1 = await ruvector.embed(testTexts[0]);
            console.log(`Success! Generated vector with dimensions: ${v1.length}`);
        } else {
            console.error("No embed function found in ruvector!");
        }

    } catch (error) {
        console.error("Error during indexing:", error);
    }
}

testIndexer().catch(console.error);
