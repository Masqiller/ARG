---
source_file: "vendor/claude-mem/tests/cursor-mcp-config.test.ts"
type: "code"
community: "Community None"
degree: 2
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# cursor-mcp-config.test.ts

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 2

## Architecture Graph
```mermaid
graph LR
    center["cursor-mcp-config.test.ts"]:::centerNode
    center -->|"imports"| N_utils_cursor_utils_configurecursormcp["configureCursorMcp[]"]
    center -->|"imports"| N_utils_cursor_utils_removemcpconfig["removeMcpConfig[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[configureCursorMcp()_1]] - `imports` [EXTRACTED]
- [[removeMcpConfig()]] - `imports` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[cursor-mcp-config.test.ts]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None