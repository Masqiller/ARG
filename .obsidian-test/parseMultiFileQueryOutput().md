---
source_file: "vendor/claude-mem/src/services/smart-file-read/parser.ts"
type: "code"
community: "Community None"
degree: 2
location: "L524"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# parseMultiFileQueryOutput()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 2

## Architecture Graph
```mermaid
graph LR
    center["parseMultiFileQueryOutput[]"]:::centerNode
    center -->|"contains"| N_vendor_claude_mem_src_services_smart_file_read_parser_ts["parser.ts"]
    center -->|"calls"| N_smart_file_read_parser_runbatchquery["runBatchQuery[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[parser.ts_1]] - `contains` [EXTRACTED]
- [[runBatchQuery()]] - `calls` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[parseMultiFileQueryOutput()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None