import { describe, it, expect } from 'vitest';
import { ARGBrain, PrunedContext } from '../src/arg-brain';
import * as path from 'path';
import * as fs from 'fs';

// Find graphify-out for testing
const PROJECT_ROOT = path.resolve(__dirname, '..');
const graphifyOut = fs.existsSync(path.join(PROJECT_ROOT, 'graphify-out'))
    ? path.join(PROJECT_ROOT, 'graphify-out')
    : path.join(PROJECT_ROOT, '..', 'graphify-out');

describe('ARGBrain', () => {
    describe('pruneContext', () => {
        it('returns a valid PrunedContext structure', () => {
            const brain = ARGBrain.getInstance(graphifyOut);
            const result = brain.pruneContext('test query');

            expect(result).toHaveProperty('relevantNodes');
            expect(result).toHaveProperty('relevantEdges');
            expect(result).toHaveProperty('tokenSavingsRatio');
            expect(result).toHaveProperty('communitiesTouched');
            expect(result).toHaveProperty('relevantMemories');
            expect(Array.isArray(result.relevantNodes)).toBe(true);
            expect(Array.isArray(result.relevantEdges)).toBe(true);
            expect(typeof result.tokenSavingsRatio).toBe('number');
        });

        it('returns higher savings ratio than 0 when graph exists', () => {
            const brain = ARGBrain.getInstance(graphifyOut);
            const result = brain.pruneContext('typescript react frontend');

            if (fs.existsSync(path.join(graphifyOut, 'graph.json'))) {
                // If graph exists, we should see actual pruning
                expect(result.tokenSavingsRatio).toBeGreaterThan(0);
            } else {
                // No graph means empty result
                expect(result.relevantNodes.length).toBe(0);
            }
        });

        it('includes session memories in search when provided', () => {
            const brain = ARGBrain.getInstance(graphifyOut);
            const memories = [
                { key: 'auth-context', content: 'We use JWT tokens for authentication with refresh rotation' },
                { key: 'db-choice', content: 'PostgreSQL with Prisma ORM for the data layer' },
            ];
            const result = brain.pruneContext('authentication token', memories);

            expect(result).toHaveProperty('relevantMemories');
            expect(Array.isArray(result.relevantMemories)).toBe(true);
        });

        it('returns empty arrays for completely unrelated queries', () => {
            const brain = ARGBrain.getInstance(graphifyOut);
            const result = brain.pruneContext('xyzzyfoobarbazqux123');

            // A nonsense query should match nothing
            expect(result.relevantNodes.length).toBe(0);
            expect(result.relevantEdges.length).toBe(0);
        });
    });

    describe('state management', () => {
        it('can save and retrieve agent state', () => {
            const brain = ARGBrain.getInstance(graphifyOut);
            brain.updateState('test-agent-1', { status: 'idle', domain: 'test' });
            const state = brain.getState('test-agent-1');

            expect(state).toBeDefined();
            expect(state.status).toBe('idle');
            expect(state.domain).toBe('test');
        });

        it('overwrites state on update', () => {
            const brain = ARGBrain.getInstance(graphifyOut);
            brain.updateState('test-agent-2', { status: 'running' });
            brain.updateState('test-agent-2', { status: 'done' });
            const state = brain.getState('test-agent-2');

            expect(state.status).toBe('done');
        });
    });
});
