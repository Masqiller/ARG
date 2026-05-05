---
source_file: "vendor/claude-mem/src/utils/cursor-utils.ts"
type: "code"
community: "Community None"
degree: 2
location: "L95"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# configureCursorMcp()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 2

## Architecture Graph
```mermaid
graph LR
    center["configureCursorMcp[]"]:::centerNode
    center -->|"imports"| N_vendor_claude_mem_tests_cursor_mcp_config_test_ts["cursor-mcp-config.test.ts"]
    center -->|"contains"| N_vendor_claude_mem_src_utils_cursor_utils_ts["cursor-utils.ts"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[cursor-mcp-config.test.ts]] - `imports` [EXTRACTED]
- [[cursor-utils.ts]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[configureCursorMcp()_1]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None