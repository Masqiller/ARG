---
source_file: "vendor/claude-mem/src/services/smart-file-read/parser.ts"
type: "code"
community: "Community None"
degree: 8
location: "L860"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# formatFoldedView()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 8

## Architecture Graph
```mermaid
graph LR
    center["formatFoldedView[]"]:::centerNode
    center -->|"imports"| N_vendor_claude_mem_src_servers_mcp_server_ts["mcp-server.ts"]
    center -->|"imports"| N_vendor_claude_mem_src_services_smart_file_read_search_ts["search.ts"]
    center -->|"calls"| N_smart_file_read_search_formatsearchresults["formatSearchResults[]"]
    center -->|"contains"| N_vendor_claude_mem_src_services_smart_file_read_parser_ts["parser.ts"]
    center -->|"calls"| N_smart_file_read_parser_parsefile["parseFile[]"]
    center -->|"calls"| N_smart_file_read_parser_parsefilesbatch["parseFilesBatch[]"]
    center -->|"calls"| N_smart_file_read_parser_formatmarkdownfoldedview["formatMarkdownFoldedView[]"]
    center -->|"calls"| N_smart_file_read_parser_formatsymbol["formatSymbol[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[formatMarkdownFoldedView()]] - `calls` [EXTRACTED]
- [[formatSearchResults()]] - `calls` [INFERRED]
- [[formatSymbol()]] - `calls` [EXTRACTED]
- [[mcp-server.ts]] - `imports` [EXTRACTED]
- [[parseFile()]] - `calls` [EXTRACTED]
- [[parseFilesBatch()]] - `calls` [EXTRACTED]
- [[parser.ts_1]] - `contains` [EXTRACTED]
- [[search.ts]] - `imports` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[formatFoldedView()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None