---
source_file: "src/skill-mapper.ts"
type: "code"
community: "Community None"
degree: 9
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# skill-mapper.ts

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 9

## Architecture Graph
```mermaid
graph LR
    center["skill-mapper.ts"]:::centerNode
    center -->|"imports_from"| N_src_mcp_server_ts["mcp-server.ts"]
    center -->|"contains"| N_src_skill_mapper_extractgraphkeywords["extractGraphKeywords[]"]
    center -->|"contains"| N_src_skill_mapper_extractkeywordsfromline["extractKeywordsFromLine[]"]
    center -->|"contains"| N_src_skill_mapper_scoreskills["scoreSkills[]"]
    center -->|"contains"| N_src_skill_mapper_applybudgetconstraints["applyBudgetConstraints[]"]
    center -->|"contains"| N_src_skill_mapper_recommendskills["recommendSkills[]"]
    center -->|"contains"| N_src_skill_mapper_getskillpath["getSkillPath[]"]
    center -->|"contains"| N_src_skill_mapper_listallskills["listAllSkills[]"]
    center -->|"contains"| N_src_skill_mapper_recommendskillsfortask["recommendSkillsForTask[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[applyBudgetConstraints()]] - `contains` [EXTRACTED]
- [[extractGraphKeywords()]] - `contains` [EXTRACTED]
- [[extractKeywordsFromLine()]] - `contains` [EXTRACTED]
- [[getSkillPath()]] - `contains` [EXTRACTED]
- [[listAllSkills()]] - `contains` [EXTRACTED]
- [[mcp-server.ts_1]] - `imports_from` [EXTRACTED]
- [[recommendSkills()]] - `contains` [EXTRACTED]
- [[recommendSkillsForTask()]] - `contains` [EXTRACTED]
- [[scoreSkills()]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[skill-mapper.ts]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None