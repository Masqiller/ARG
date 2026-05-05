---
source_file: "vendor/claude-mem/src/shared/path-utils.ts"
type: "code"
community: "Community None"
degree: 6
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# path-utils.ts

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 6

## Architecture Graph
```mermaid
graph LR
    center["path-utils.ts"]:::centerNode
    center -->|"imports_from"| N_vendor_claude_mem_tests_services_sqlite_session_search_path_matching_test_ts["session-search-path-matching.test.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_cli_claude_md_commands_ts["claude-md-commands.ts"]
    center -->|"contains"| N_shared_path_utils_normalizepath["normalizePath[]"]
    center -->|"contains"| N_shared_path_utils_isdirectchild["isDirectChild[]"]
    center -->|"imports_from"| N_vendor_claude_mem_src_services_sqlite_sessionsearch_ts["SessionSearch.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_scripts_regenerate_claude_md_ts["regenerate-claude-md.ts"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[SessionSearch.ts]] - `imports_from` [EXTRACTED]
- [[claude-md-commands.ts]] - `imports_from` [EXTRACTED]
- [[isDirectChild()]] - `contains` [EXTRACTED]
- [[normalizePath()]] - `contains` [EXTRACTED]
- [[regenerate-claude-md.ts]] - `imports_from` [EXTRACTED]
- [[session-search-path-matching.test.ts]] - `imports_from` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[path-utils.ts]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None