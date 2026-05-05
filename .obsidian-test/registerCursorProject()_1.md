---
source_file: "vendor/claude-mem/src/utils/cursor-utils.ts"
type: "code"
community: "Community None"
degree: 4
location: "L42"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# registerCursorProject()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 4

## Architecture Graph
```mermaid
graph LR
    center["registerCursorProject[]"]:::centerNode
    center -->|"imports"| N_vendor_claude_mem_tests_cursor_registry_test_ts["cursor-registry.test.ts"]
    center -->|"contains"| N_vendor_claude_mem_src_utils_cursor_utils_ts["cursor-utils.ts"]
    center -->|"calls"| N_utils_cursor_utils_readcursorregistry["readCursorRegistry[]"]
    center -->|"calls"| N_utils_cursor_utils_writecursorregistry["writeCursorRegistry[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[cursor-registry.test.ts]] - `imports` [EXTRACTED]
- [[cursor-utils.ts]] - `contains` [EXTRACTED]
- [[readCursorRegistry()_1]] - `calls` [EXTRACTED]
- [[writeCursorRegistry()_1]] - `calls` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[registerCursorProject()_1]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None