---
source_file: "vendor/claude-mem/scripts/cwd-remap.ts"
type: "code"
community: "Community None"
degree: 3
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# cwd-remap.ts

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 3

## Architecture Graph
```mermaid
graph LR
    center["cwd-remap.ts"]:::centerNode
    center -->|"contains"| N_scripts_cwd_remap_git["git[]"]
    center -->|"contains"| N_scripts_cwd_remap_classify["classify[]"]
    center -->|"contains"| N_scripts_cwd_remap_main["main[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[classify()]] - `contains` [EXTRACTED]
- [[git()]] - `contains` [EXTRACTED]
- [[main()_41]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[cwd-remap.ts]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None