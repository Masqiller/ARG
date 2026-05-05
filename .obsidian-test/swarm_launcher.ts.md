---
source_file: "src/swarm_launcher.ts"
type: "code"
community: "Community None"
degree: 3
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# swarm_launcher.ts

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 3

## Architecture Graph
```mermaid
graph LR
    center["swarm_launcher.ts"]:::centerNode
    center -->|"imports"| N_src_skill_mapper_recommendskillsfortask["recommendSkillsForTask[]"]
    center -->|"imports"| N_src_skill_mapper_getskillpath["getSkillPath[]"]
    center -->|"contains"| N_src_swarm_launcher_runswarm["runSwarm[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[getSkillPath()]] - `imports` [EXTRACTED]
- [[recommendSkillsForTask()]] - `imports` [EXTRACTED]
- [[runSwarm()]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[swarm_launcher.ts]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None