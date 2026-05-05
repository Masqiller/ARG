---
source_file: "scripts/arg_query.ts"
type: "code"
community: "Community None"
degree: 1
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# arg_query.ts

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 1

## Architecture Graph
```mermaid
graph LR
    center["arg_query.ts"]:::centerNode
    center -->|"imports"| N_src_skill_mapper_recommendskillsfortask["recommendSkillsForTask[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[recommendSkillsForTask()]] - `imports` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[arg_query.ts]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None