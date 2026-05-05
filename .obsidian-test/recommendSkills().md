---
source_file: "src/skill-mapper.ts"
type: "code"
community: "Community None"
degree: 5
location: "L296"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# recommendSkills()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 5

## Architecture Graph
```mermaid
graph LR
    center["recommendSkills[]"]:::centerNode
    center -->|"imports"| N_src_mcp_server_ts["mcp-server.ts"]
    center -->|"contains"| N_src_skill_mapper_ts["skill-mapper.ts"]
    center -->|"calls"| N_src_skill_mapper_extractgraphkeywords["extractGraphKeywords[]"]
    center -->|"calls"| N_src_skill_mapper_scoreskills["scoreSkills[]"]
    center -->|"calls"| N_src_skill_mapper_applybudgetconstraints["applyBudgetConstraints[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[applyBudgetConstraints()]] - `calls` [EXTRACTED]
- [[extractGraphKeywords()]] - `calls` [EXTRACTED]
- [[mcp-server.ts_1]] - `imports` [EXTRACTED]
- [[scoreSkills()]] - `calls` [EXTRACTED]
- [[skill-mapper.ts]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[recommendSkills()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None