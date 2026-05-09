const fs = require('fs');
const path = require('path');
const ruvector = require('ruvector');

/**
 * 🌪️ ARG SKILL EMBEDDING GENERATOR
 * Task: Generate real ONNX embeddings for all 5,000+ skills.
 */
async function generateEmbeddings() {
    console.log("🌪️ ARG SKILL EMBEDDING GENERATOR ONLINE.");

    try {
        // Initialize the ONNX embedder
        console.log("Initializing ONNX embedder...");
        await ruvector.initOnnxEmbedder();
        console.log("ONNX embedder ready.");

        // Read universal skills
        const skillsPath = path.join(__dirname, '..', '..', 'graphify-out', 'universal_skills.json');
        if (!fs.existsSync(skillsPath)) {
            throw new Error(`Skills file not found at ${skillsPath}`);
        }

        const skills = JSON.parse(fs.readFileSync(skillsPath, 'utf8'));
        console.log(`Loaded ${skills.length} skills.`);

        const batchSize = 100;
        const totalBatches = Math.ceil(skills.length / batchSize);
        const skillsWithVectors = [];

        console.log(`Processing ${skills.length} skills in ${totalBatches} batches...`);

        for (let i = 0; i < skills.length; i += batchSize) {
            const batch = skills.slice(i, i + batchSize);
            const texts = batch.map(s => `${s.name}: ${s.description}`);
            
            console.log(`Processing batch ${Math.floor(i / batchSize) + 1}/${totalBatches}...`);
            
            try {
                const results = await ruvector.embedBatch(texts);
                
                for (let j = 0; j < batch.length; j++) {
                    skillsWithVectors.push({
                        ...batch[j],
                        embedding: results[j].embedding
                    });
                }
            } catch (batchError) {
                console.error(`Error processing batch starting at index ${i}:`, batchError);
                // Fallback to sequential for this batch if batch fails
                for (const skill of batch) {
                    try {
                        const result = await ruvector.embed(`${skill.name}: ${skill.description}`);
                        skillsWithVectors.push({
                            ...skill,
                            embedding: result.embedding
                        });
                    } catch (singleError) {
                        console.error(`Failed to embed skill ${skill.name}:`, singleError);
                        skillsWithVectors.push({
                            ...skill,
                            embedding: null // Keep the skill but mark embedding as null
                        });
                    }
                }
            }
        }

        // Save the results
        const outputPath = path.join(__dirname, '..', '..', 'graphify-out', 'universal_skills_with_vectors.json');
        fs.writeFileSync(outputPath, JSON.stringify(skillsWithVectors, null, 2));
        console.log(`\n🎉 Success! Saved ${skillsWithVectors.length} skills with vectors to ${outputPath}`);

    } catch (error) {
        console.error("Error during embedding generation:", error);
    }
}

generateEmbeddings().catch(console.error);
