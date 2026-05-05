---
source_file: "vendor/claude-mem/tests/services/sqlite/session-search-path-matching.test.ts"
type: "code"
community: "Community None"
degree: 3
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# session-search-path-matching.test.ts

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 3

## Architecture Graph
```mermaid
graph LR
    center["session-search-path-matching.test.ts"]:::centerNode
    center -->|"imports_from"| N_vendor_claude_mem_src_shared_path_utils_ts["path-utils.ts"]
    center -->|"imports"| N_shared_path_utils_isdirectchild["isDirectChild[]"]
    center -->|"imports"| N_shared_path_utils_normalizepath["normalizePath[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[isDirectChild()]] - `imports` [EXTRACTED]
- [[normalizePath()]] - `imports` [EXTRACTED]
- [[path-utils.ts]] - `imports_from` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[session-search-path-matching.test.ts]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None