---
source_file: "vendor/claude-mem/scripts/cwd-remap.ts"
type: "code"
community: "Community None"
degree: 2
location: "L53"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# main()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 2

## Architecture Graph
```mermaid
graph LR
    center["main[]"]:::centerNode
    center -->|"contains"| N_vendor_claude_mem_scripts_cwd_remap_ts["cwd-remap.ts"]
    center -->|"calls"| N_scripts_cwd_remap_classify["classify[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[classify()]] - `calls` [EXTRACTED]
- [[cwd-remap.ts]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[main()_41]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None