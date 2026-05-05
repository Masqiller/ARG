---
source_file: "src/skill-mapper.ts"
type: "code"
community: "Community None"
degree: 4
location: "L266"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# applyBudgetConstraints()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 4

## Architecture Graph
```mermaid
graph LR
    center["applyBudgetConstraints[]"]:::centerNode
    center -->|"contains"| N_src_skill_mapper_ts["skill-mapper.ts"]
    center -->|"calls"| N_src_skill_mapper_getskillpath["getSkillPath[]"]
    center -->|"calls"| N_src_skill_mapper_recommendskills["recommendSkills[]"]
    center -->|"calls"| N_src_skill_mapper_recommendskillsfortask["recommendSkillsForTask[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[getSkillPath()]] - `calls` [EXTRACTED]
- [[recommendSkills()]] - `calls` [EXTRACTED]
- [[recommendSkillsForTask()]] - `calls` [EXTRACTED]
- [[skill-mapper.ts]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[applyBudgetConstraints()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None