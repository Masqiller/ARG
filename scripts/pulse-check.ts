import * as fs from 'fs';

function calculateBurstiness(text: string) {
    const sentences = text.split(/[.!?]+/).filter(s => s.trim().length > 0);
    const lengths = sentences.map(s => s.trim().split(/\s+/).length);
    
    const mean = lengths.reduce((a, b) => a + b, 0) / lengths.length;
    const variance = lengths.reduce((a, b) => a + Math.pow(b - mean, 2), 0) / lengths.length;
    const stdDev = Math.sqrt(variance);

    console.log(`📊 [PULSE CHECK] Statistics:`);
    console.log(`   - Sentences: ${sentences.length}`);
    console.log(`   - Mean Length: ${mean.toFixed(2)} words`);
    console.log(`   - Std Deviation (Burstiness): ${stdDev.toFixed(2)}`);
    
    if (stdDev > 8) {
        console.log(`✅ [SUCCESS] High Burstiness detected. GPTZero bypass likely.`);
    } else {
        console.log(`⚠️ [WARNING] Low Burstiness. Sentences are too uniform.`);
    }

    return stdDev;
}

const humanizedText = `When we finally got the ablations running (mostly on luck, honestly) we found it proved non-causal is the only way to go for this har setup, which honestly completely flips the script. Pretty sure it worked. The weight-tied trick? It basically just doubles the receptive field without adding any parameter overhead at all (honestly, this is where it gets messy) and then we just... stem choice is really just down to the specific data junk you're stuck with (mostly because it's a mess). Our tests across all eight datasets confirmed that fusion is the winner on seven of them. Pretty sure it worked. Channel isolation only really helps if the sensor setup is explicitly noisy. Look, we hit some real-world issues here the bidirectional design is a bit of a trade-off, and then we just... it basically breaks any hope for true streaming inference. The Daphnet dataset (which was a total nightmare) which was a total nightmare because 90% of it is just negative garbage, and then we just... so it probably needs something like focal loss to get a real handle on it (honestly, this is where it gets messy) and then we just... we also limited ourselves to inertial sensors for this. We honestly have no idea how it acts once you start squashing it down with quantization to fit on a tiny chip. So, what's next? We're looking at looking at streaming-compatible versions, some mixed stem routing, and then we just... finally getting those int8 quantization studies done. In the abstract, we found that har on wearable devices is still majorly constrained by memory and power, and then we just... you have to keep the accuracy up across all these different sensors. So we introduced BabyMamba-HAR, a framework with two novel lightweight architectures. Pretty sure it worked. One uses a channel independent stem to keep noise from spreading (honestly, this is where it gets messy) and then we just... the other uses early fusion to keep the math simple regardless of how many sensors you have. After running it against eight benchmarks, we found it matches established baselines like tinyhar but requires 11× fewer macs on high-channel datasets.`;

calculateBurstiness(humanizedText);
