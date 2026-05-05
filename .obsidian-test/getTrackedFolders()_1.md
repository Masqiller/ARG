---
source_file: "vendor/claude-mem/scripts/regenerate-claude-md.ts"
type: "code"
community: "Community None"
degree: 3
location: "L57"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# getTrackedFolders()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 3

## Architecture Graph
```mermaid
graph LR
    center["getTrackedFolders[]"]:::centerNode
    center -->|"contains"| N_vendor_claude_mem_scripts_regenerate_claude_md_ts["regenerate-claude-md.ts"]
    center -->|"calls"| N_scripts_regenerate_claude_md_walkdirectorieswithignore["walkDirectoriesWithIgnore[]"]
    center -->|"calls"| N_scripts_regenerate_claude_md_main["main[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[main()_39]] - `calls` [EXTRACTED]
- [[regenerate-claude-md.ts]] - `contains` [EXTRACTED]
- [[walkDirectoriesWithIgnore()_1]] - `calls` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[getTrackedFolders()_1]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None