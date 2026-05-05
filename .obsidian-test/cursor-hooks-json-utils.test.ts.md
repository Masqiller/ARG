---
source_file: "vendor/claude-mem/tests/cursor-hooks-json-utils.test.ts"
type: "code"
community: "Community None"
degree: 5
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# cursor-hooks-json-utils.test.ts

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 5

## Architecture Graph
```mermaid
graph LR
    center["cursor-hooks-json-utils.test.ts"]:::centerNode
    center -->|"imports"| N_utils_cursor_utils_parsearrayfield["parseArrayField[]"]
    center -->|"imports"| N_utils_cursor_utils_jsonget["jsonGet[]"]
    center -->|"imports"| N_utils_cursor_utils_getprojectname["getProjectName[]"]
    center -->|"imports"| N_utils_cursor_utils_isempty["isEmpty[]"]
    center -->|"imports"| N_utils_cursor_utils_urlencode["urlEncode[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[getProjectName()_1]] - `imports` [EXTRACTED]
- [[isEmpty()]] - `imports` [EXTRACTED]
- [[jsonGet()]] - `imports` [EXTRACTED]
- [[parseArrayField()]] - `imports` [EXTRACTED]
- [[urlEncode()]] - `imports` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[cursor-hooks-json-utils.test.ts]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None