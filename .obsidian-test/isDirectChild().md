---
source_file: "vendor/claude-mem/src/shared/path-utils.ts"
type: "code"
community: "Community None"
degree: 8
location: "L6"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# isDirectChild()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 8

## Architecture Graph
```mermaid
graph LR
    center["isDirectChild[]"]:::centerNode
    center -->|"imports"| N_vendor_claude_mem_tests_services_sqlite_session_search_path_matching_test_ts["session-search-path-matching.test.ts"]
    center -->|"imports"| N_vendor_claude_mem_src_cli_claude_md_commands_ts["claude-md-commands.ts"]
    center -->|"calls"| N_cli_claude_md_commands_extractrelevantfile["extractRelevantFile[]"]
    center -->|"contains"| N_vendor_claude_mem_src_shared_path_utils_ts["path-utils.ts"]
    center -->|"calls"| N_shared_path_utils_normalizepath["normalizePath[]"]
    center -->|"imports"| N_vendor_claude_mem_src_services_sqlite_sessionsearch_ts["SessionSearch.ts"]
    center -->|"imports"| N_vendor_claude_mem_scripts_regenerate_claude_md_ts["regenerate-claude-md.ts"]
    center -->|"calls"| N_scripts_regenerate_claude_md_extractrelevantfile["extractRelevantFile[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[SessionSearch.ts]] - `imports` [EXTRACTED]
- [[claude-md-commands.ts]] - `imports` [EXTRACTED]
- [[extractRelevantFile()]] - `calls` [INFERRED]
- [[extractRelevantFile()_1]] - `calls` [INFERRED]
- [[normalizePath()]] - `calls` [EXTRACTED]
- [[path-utils.ts]] - `contains` [EXTRACTED]
- [[regenerate-claude-md.ts]] - `imports` [EXTRACTED]
- [[session-search-path-matching.test.ts]] - `imports` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[isDirectChild()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None