---
source_file: "vendor/claude-mem/src/utils/cursor-utils.ts"
type: "code"
community: "Community None"
degree: 2
location: "L191"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# urlEncode()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 2

## Architecture Graph
```mermaid
graph LR
    center["urlEncode[]"]:::centerNode
    center -->|"imports"| N_vendor_claude_mem_tests_cursor_hooks_json_utils_test_ts["cursor-hooks-json-utils.test.ts"]
    center -->|"contains"| N_vendor_claude_mem_src_utils_cursor_utils_ts["cursor-utils.ts"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[cursor-hooks-json-utils.test.ts]] - `imports` [EXTRACTED]
- [[cursor-utils.ts]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[urlEncode()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None