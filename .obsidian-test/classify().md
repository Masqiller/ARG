---
source_file: "vendor/claude-mem/scripts/cwd-remap.ts"
type: "code"
community: "Community None"
degree: 3
location: "L29"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# classify()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 3

## Architecture Graph
```mermaid
graph LR
    center["classify[]"]:::centerNode
    center -->|"contains"| N_vendor_claude_mem_scripts_cwd_remap_ts["cwd-remap.ts"]
    center -->|"calls"| N_scripts_cwd_remap_git["git[]"]
    center -->|"calls"| N_scripts_cwd_remap_main["main[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[cwd-remap.ts]] - `contains` [EXTRACTED]
- [[git()]] - `calls` [EXTRACTED]
- [[main()_41]] - `calls` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[classify()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None