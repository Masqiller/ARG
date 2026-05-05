---
source_file: "vendor/claude-mem/src/services/smart-file-read/search.ts"
type: "code"
community: "Community None"
degree: 7
location: "L106"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# searchCodebase()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 7

## Architecture Graph
```mermaid
graph LR
    center["searchCodebase[]"]:::centerNode
    center -->|"imports"| N_vendor_claude_mem_src_servers_mcp_server_ts["mcp-server.ts"]
    center -->|"contains"| N_vendor_claude_mem_src_services_smart_file_read_search_ts["search.ts"]
    center -->|"calls"| N_smart_file_read_search_safereadfile["safeReadFile[]"]
    center -->|"calls"| N_smart_file_read_search_countsymbols["countSymbols[]"]
    center -->|"calls"| N_smart_file_read_search_matchscore["matchScore[]"]
    center -->|"calls"| N_smart_file_read_parser_loadusergrammars["loadUserGrammars[]"]
    center -->|"calls"| N_smart_file_read_parser_parsefilesbatch["parseFilesBatch[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[countSymbols()]] - `calls` [EXTRACTED]
- [[loadUserGrammars()]] - `calls` [INFERRED]
- [[matchScore()]] - `calls` [EXTRACTED]
- [[mcp-server.ts]] - `imports` [EXTRACTED]
- [[parseFilesBatch()]] - `calls` [INFERRED]
- [[safeReadFile()]] - `calls` [EXTRACTED]
- [[search.ts]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[searchCodebase()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None