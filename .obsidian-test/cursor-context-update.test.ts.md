---
source_file: "vendor/claude-mem/tests/cursor-context-update.test.ts"
type: "code"
community: "Community None"
degree: 2
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# cursor-context-update.test.ts

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 2

## Architecture Graph
```mermaid
graph LR
    center["cursor-context-update.test.ts"]:::centerNode
    center -->|"imports"| N_utils_cursor_utils_writecontextfile["writeContextFile[]"]
    center -->|"imports"| N_utils_cursor_utils_readcontextfile["readContextFile[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[readContextFile()]] - `imports` [EXTRACTED]
- [[writeContextFile()]] - `imports` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[cursor-context-update.test.ts]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None