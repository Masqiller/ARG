---
source_file: "vendor/claude-mem/src/services/smart-file-read/parser.ts"
type: "code"
community: "Community None"
degree: 4
location: "L85"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# getUserAwareQueryKey()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 4

## Architecture Graph
```mermaid
graph LR
    center["getUserAwareQueryKey[]"]:::centerNode
    center -->|"contains"| N_vendor_claude_mem_src_services_smart_file_read_parser_ts["parser.ts"]
    center -->|"calls"| N_smart_file_read_parser_getquerykey["getQueryKey[]"]
    center -->|"calls"| N_smart_file_read_parser_parsefile["parseFile[]"]
    center -->|"calls"| N_smart_file_read_parser_parsefilesbatch["parseFilesBatch[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[getQueryKey()]] - `calls` [EXTRACTED]
- [[parseFile()]] - `calls` [EXTRACTED]
- [[parseFilesBatch()]] - `calls` [EXTRACTED]
- [[parser.ts_1]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[getUserAwareQueryKey()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None