---
source_file: "vendor/claude-mem/src/services/smart-file-read/search.ts"
type: "code"
community: "Community None"
degree: 3
location: "L265"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# formatSearchResults()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 3

## Architecture Graph
```mermaid
graph LR
    center["formatSearchResults[]"]:::centerNode
    center -->|"imports"| N_vendor_claude_mem_src_servers_mcp_server_ts["mcp-server.ts"]
    center -->|"contains"| N_vendor_claude_mem_src_services_smart_file_read_search_ts["search.ts"]
    center -->|"calls"| N_smart_file_read_parser_formatfoldedview["formatFoldedView[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[formatFoldedView()]] - `calls` [INFERRED]
- [[mcp-server.ts]] - `imports` [EXTRACTED]
- [[search.ts]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[formatSearchResults()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None