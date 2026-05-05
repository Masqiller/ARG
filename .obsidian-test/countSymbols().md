---
source_file: "vendor/claude-mem/src/services/smart-file-read/search.ts"
type: "code"
community: "Community None"
degree: 2
location: "L257"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# countSymbols()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 2

## Architecture Graph
```mermaid
graph LR
    center["countSymbols[]"]:::centerNode
    center -->|"contains"| N_vendor_claude_mem_src_services_smart_file_read_search_ts["search.ts"]
    center -->|"calls"| N_smart_file_read_search_searchcodebase["searchCodebase[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[search.ts]] - `contains` [EXTRACTED]
- [[searchCodebase()]] - `calls` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[countSymbols()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None