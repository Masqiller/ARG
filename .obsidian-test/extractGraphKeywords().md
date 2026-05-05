---
source_file: "src/skill-mapper.ts"
type: "code"
community: "Community None"
degree: 4
location: "L133"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# extractGraphKeywords()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 4

## Architecture Graph
```mermaid
graph LR
    center["extractGraphKeywords[]"]:::centerNode
    center -->|"contains"| N_src_skill_mapper_ts["skill-mapper.ts"]
    center -->|"calls"| N_src_skill_mapper_extractkeywordsfromline["extractKeywordsFromLine[]"]
    center -->|"calls"| N_src_skill_mapper_recommendskills["recommendSkills[]"]
    center -->|"calls"| N_src_skill_mapper_recommendskillsfortask["recommendSkillsForTask[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[extractKeywordsFromLine()]] - `calls` [EXTRACTED]
- [[recommendSkills()]] - `calls` [EXTRACTED]
- [[recommendSkillsForTask()]] - `calls` [EXTRACTED]
- [[skill-mapper.ts]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[extractGraphKeywords()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None