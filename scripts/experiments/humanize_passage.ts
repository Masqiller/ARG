import { VibeRouter } from './src/vibe-router';
import * as path from 'path';

async function humanizeTechnicalPassage() {
    const projectRoot = path.join(__dirname);
    const graphifyOut = path.join(projectRoot, 'graphify-out');
    const router = new VibeRouter(graphifyOut, projectRoot);

    const passage = `limitation of decision tree ensembles is their inability to
extrapolate beyond the bounds of the training data. Con-
sequently, RF exhibited comparatively lower performance
(GP R2 = 0.8792, RMSE = 16.0398 MW), often under-
predicting extreme peak GP values during high irradiance
conditions and over-predicting during heavy cloud cover.
• Extreme Gradient Boosting (XGBoost): XGBoost per-
formed among the best standalone models due to its
effective L1/L2 regularization capabilities and boosting
framework (GP R2 = 0.8875, RMSE = 15.4787 MW).
Nevertheless, as a deterministic model, it lacks an inher-
ent mechanism to explicitly model the probabilistic un-
certainty (sensor noise) present in pyranometer readings.
• Gaussian Process Regression (GPR): GPR effectively
modeled the thermal inertia and sensor noise using the
WhiteKernel, achieving strong performance on the ther-
mal side (TED R2 = 0.9957). However, when applied
to the high-variance electrical side (GP), its smoothing
nature driven by the Matern kernel, which was still insuf-
ficient to fully capture sharp, step-like variations caused
by parasitic load fluctuations, resulting in comparatively
lower performance (GP R2 = 0.8793, RMSE = 16.0349
MW).`;

    const result = await (router as any).plugins.runPlugin('humanization-council', { text: passage });
    
    if (result.status === 'success') {
        console.log("\n--- [ORIGINAL TECHNICAL PASSAGE] ---");
        console.log(passage);
        console.log("\n--- [STEALTH HUMANIZED VERSION] ---");
        console.log(result.humanized);
        console.log("\n--- [COUNCIL DECISION] ---");
        console.log(result.decision);
    }
}

humanizeTechnicalPassage().catch(console.error);
