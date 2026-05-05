---
source_file: "vendor/claude-mem/src/shared/path-utils.ts"
type: "code"
community: "Community None"
degree: 3
location: "L2"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# normalizePath()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 3

## Architecture Graph
```mermaid
graph LR
    center["normalizePath[]"]:::centerNode
    center -->|"imports"| N_vendor_claude_mem_tests_services_sqlite_session_search_path_matching_test_ts["session-search-path-matching.test.ts"]
    center -->|"contains"| N_vendor_claude_mem_src_shared_path_utils_ts["path-utils.ts"]
    center -->|"calls"| N_shared_path_utils_isdirectchild["isDirectChild[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[isDirectChild()]] - `calls` [EXTRACTED]
- [[path-utils.ts]] - `contains` [EXTRACTED]
- [[session-search-path-matching.test.ts]] - `imports` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[normalizePath()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None