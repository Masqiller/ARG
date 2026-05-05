---
source_file: "scripts/generate_skill_tree.ts"
type: "code"
community: "Community None"
degree: 1
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# generate_skill_tree.ts

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 1

## Architecture Graph
```mermaid
graph LR
    center["generate_skill_tree.ts"]:::centerNode
    center -->|"contains"| N_scripts_generate_skill_tree_generategraph["generateGraph[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[generateGraph()]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[generate_skill_tree.ts]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None