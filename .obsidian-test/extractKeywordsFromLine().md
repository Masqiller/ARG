---
source_file: "src/skill-mapper.ts"
type: "code"
community: "Community None"
degree: 3
location: "L189"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# extractKeywordsFromLine()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 3

## Architecture Graph
```mermaid
graph LR
    center["extractKeywordsFromLine[]"]:::centerNode
    center -->|"contains"| N_src_skill_mapper_ts["skill-mapper.ts"]
    center -->|"calls"| N_src_skill_mapper_extractgraphkeywords["extractGraphKeywords[]"]
    center -->|"calls"| N_src_skill_mapper_recommendskillsfortask["recommendSkillsForTask[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[extractGraphKeywords()]] - `calls` [EXTRACTED]
- [[recommendSkillsForTask()]] - `calls` [EXTRACTED]
- [[skill-mapper.ts]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[extractKeywordsFromLine()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None