---
source_file: "vendor/claude-mem/src/services/smart-file-read/parser.ts"
type: "code"
community: "Community None"
degree: 5
location: "L507"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# runBatchQuery()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 5

## Architecture Graph
```mermaid
graph LR
    center["runBatchQuery[]"]:::centerNode
    center -->|"contains"| N_vendor_claude_mem_src_services_smart_file_read_parser_ts["parser.ts"]
    center -->|"calls"| N_smart_file_read_parser_gettreesitterbin["getTreeSitterBin[]"]
    center -->|"calls"| N_smart_file_read_parser_runquery["runQuery[]"]
    center -->|"calls"| N_smart_file_read_parser_parsemultifilequeryoutput["parseMultiFileQueryOutput[]"]
    center -->|"calls"| N_smart_file_read_parser_parsefilesbatch["parseFilesBatch[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[getTreeSitterBin()]] - `calls` [EXTRACTED]
- [[parseFilesBatch()]] - `calls` [EXTRACTED]
- [[parseMultiFileQueryOutput()]] - `calls` [EXTRACTED]
- [[parser.ts_1]] - `contains` [EXTRACTED]
- [[runQuery()]] - `calls` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[runBatchQuery()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None