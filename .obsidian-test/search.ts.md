---
source_file: "vendor/claude-mem/src/services/smart-file-read/search.ts"
type: "code"
community: "Community None"
degree: 12
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# search.ts

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 12

## Architecture Graph
```mermaid
graph LR
    center["search.ts"]:::centerNode
    center -->|"imports_from"| N_vendor_claude_mem_src_servers_mcp_server_ts["mcp-server.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_services_smart_file_read_parser_ts["parser.ts"]
    center -->|"imports"| N_smart_file_read_parser_parsefilesbatch["parseFilesBatch[]"]
    center -->|"imports"| N_smart_file_read_parser_formatfoldedview["formatFoldedView[]"]
    center -->|"imports"| N_smart_file_read_parser_loadusergrammars["loadUserGrammars[]"]
    center -->|"imports_from"| N_vendor_claude_mem_src_utils_logger_ts["logger.ts"]
    center -->|"imports"| N_utils_logger_logger["Logger"]
    center -->|"contains"| N_smart_file_read_search_safereadfile["safeReadFile[]"]
    center -->|"contains"| N_smart_file_read_search_searchcodebase["searchCodebase[]"]
    center -->|"contains"| N_smart_file_read_search_matchscore["matchScore[]"]
    center -->|"contains"| N_smart_file_read_search_countsymbols["countSymbols[]"]
    center -->|"contains"| N_smart_file_read_search_formatsearchresults["formatSearchResults[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[Logger]] - `imports` [EXTRACTED]
- [[countSymbols()]] - `contains` [EXTRACTED]
- [[formatFoldedView()]] - `imports` [EXTRACTED]
- [[formatSearchResults()]] - `contains` [EXTRACTED]
- [[loadUserGrammars()]] - `imports` [EXTRACTED]
- [[logger.ts]] - `imports_from` [EXTRACTED]
- [[matchScore()]] - `contains` [EXTRACTED]
- [[mcp-server.ts]] - `imports_from` [EXTRACTED]
- [[parseFilesBatch()]] - `imports` [EXTRACTED]
- [[parser.ts_1]] - `imports_from` [EXTRACTED]
- [[safeReadFile()]] - `contains` [EXTRACTED]
- [[searchCodebase()]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[search.ts]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None