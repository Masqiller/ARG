---
source_file: "vendor/claude-mem/tests/cursor-registry.test.ts"
type: "code"
community: "Community None"
degree: 4
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# cursor-registry.test.ts

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 4

## Architecture Graph
```mermaid
graph LR
    center["cursor-registry.test.ts"]:::centerNode
    center -->|"imports"| N_utils_cursor_utils_readcursorregistry["readCursorRegistry[]"]
    center -->|"imports"| N_utils_cursor_utils_writecursorregistry["writeCursorRegistry[]"]
    center -->|"imports"| N_utils_cursor_utils_registercursorproject["registerCursorProject[]"]
    center -->|"imports"| N_utils_cursor_utils_unregistercursorproject["unregisterCursorProject[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[readCursorRegistry()_1]] - `imports` [EXTRACTED]
- [[registerCursorProject()_1]] - `imports` [EXTRACTED]
- [[unregisterCursorProject()_1]] - `imports` [EXTRACTED]
- [[writeCursorRegistry()_1]] - `imports` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[cursor-registry.test.ts]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None