---
source_file: "src/skill-mapper.ts"
type: "code"
community: "Community None"
degree: 7
location: "L305"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# getSkillPath()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 7

## Architecture Graph
```mermaid
graph LR
    center["getSkillPath[]"]:::centerNode
    center -->|"imports"| N_src_swarm_launcher_ts["swarm_launcher.ts"]
    center -->|"imports"| N_src_mcp_server_ts["mcp-server.ts"]
    center -->|"contains"| N_src_skill_mapper_ts["skill-mapper.ts"]
    center -->|"calls"| N_src_skill_mapper_applybudgetconstraints["applyBudgetConstraints[]"]
    center -->|"imports"| N_scripts_evaluate_efficiency_ts["evaluate_efficiency.ts"]
    center -->|"calls"| N_scripts_evaluate_efficiency_simulatescenarioa["simulateScenarioA[]"]
    center -->|"calls"| N_scripts_evaluate_efficiency_simulatescenarioc["simulateScenarioC[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[applyBudgetConstraints()]] - `calls` [EXTRACTED]
- [[evaluate_efficiency.ts]] - `imports` [EXTRACTED]
- [[mcp-server.ts_1]] - `imports` [EXTRACTED]
- [[simulateScenarioA()]] - `calls` [INFERRED]
- [[simulateScenarioC()]] - `calls` [INFERRED]
- [[skill-mapper.ts]] - `contains` [EXTRACTED]
- [[swarm_launcher.ts]] - `imports` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[getSkillPath()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None