---
source_file: "src/skill-mapper.ts"
type: "code"
community: "Community None"
degree: 12
location: "L337"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# recommendSkillsForTask()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 12

## Architecture Graph
```mermaid
graph LR
    center["recommendSkillsForTask[]"]:::centerNode
    center -->|"imports"| N_src_swarm_launcher_ts["swarm_launcher.ts"]
    center -->|"imports"| N_src_mcp_server_ts["mcp-server.ts"]
    center -->|"imports"| N_src_vibe_router_ts["vibe-router.ts"]
    center -->|"calls"| N_src_vibe_router_viberouter_executevibe[".executeVibe[]"]
    center -->|"contains"| N_src_skill_mapper_ts["skill-mapper.ts"]
    center -->|"calls"| N_src_skill_mapper_extractgraphkeywords["extractGraphKeywords[]"]
    center -->|"calls"| N_src_skill_mapper_extractkeywordsfromline["extractKeywordsFromLine[]"]
    center -->|"calls"| N_src_skill_mapper_scoreskills["scoreSkills[]"]
    center -->|"calls"| N_src_skill_mapper_applybudgetconstraints["applyBudgetConstraints[]"]
    center -->|"imports"| N_scripts_evaluate_efficiency_ts["evaluate_efficiency.ts"]
    center -->|"imports"| N_scripts_arg_query_ts["arg_query.ts"]
    center -->|"calls"| N_scripts_evaluate_efficiency_simulatescenarioc["simulateScenarioC[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[.executeVibe()]] - `calls` [INFERRED]
- [[applyBudgetConstraints()]] - `calls` [EXTRACTED]
- [[arg_query.ts]] - `imports` [EXTRACTED]
- [[evaluate_efficiency.ts]] - `imports` [EXTRACTED]
- [[extractGraphKeywords()]] - `calls` [EXTRACTED]
- [[extractKeywordsFromLine()]] - `calls` [EXTRACTED]
- [[mcp-server.ts_1]] - `imports` [EXTRACTED]
- [[scoreSkills()]] - `calls` [EXTRACTED]
- [[simulateScenarioC()]] - `calls` [INFERRED]
- [[skill-mapper.ts]] - `contains` [EXTRACTED]
- [[swarm_launcher.ts]] - `imports` [EXTRACTED]
- [[vibe-router.ts]] - `imports` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[recommendSkillsForTask()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None