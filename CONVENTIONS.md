# PROJECT CONVENTIONS & BEHAVIORAL MANDATE

## Orchestrator-First Development
All development in this repository MUST be funneled through the **ARG Orchestrator**. 

If you are an AI assistant:
1. **NEVER** edit files directly as your first action.
2. **ALWAYS** run `./bin/vibe run "<task>"` using your terminal tool.
3. Treat the output of that command as the ground truth.

This ensures all changes are tracked by the swarm, semantic memory is updated, and security audits are performed automatically.
