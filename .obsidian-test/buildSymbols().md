---
source_file: "vendor/claude-mem/src/services/smart-file-read/parser.ts"
type: "code"
community: "Community None"
degree: 7
location: "L657"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# buildSymbols()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 7

## Architecture Graph
```mermaid
graph LR
    center["buildSymbols[]"]:::centerNode
    center -->|"contains"| N_vendor_claude_mem_src_services_smart_file_read_parser_ts["parser.ts"]
    center -->|"calls"| N_smart_file_read_parser_extractsignaturefromlines["extractSignatureFromLines[]"]
    center -->|"calls"| N_smart_file_read_parser_findcommentabove["findCommentAbove[]"]
    center -->|"calls"| N_smart_file_read_parser_findpythondocstringfromlines["findPythonDocstringFromLines[]"]
    center -->|"calls"| N_smart_file_read_parser_isexported["isExported[]"]
    center -->|"calls"| N_smart_file_read_parser_parsefile["parseFile[]"]
    center -->|"calls"| N_smart_file_read_parser_parsefilesbatch["parseFilesBatch[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[extractSignatureFromLines()]] - `calls` [EXTRACTED]
- [[findCommentAbove()]] - `calls` [EXTRACTED]
- [[findPythonDocstringFromLines()]] - `calls` [EXTRACTED]
- [[isExported()]] - `calls` [EXTRACTED]
- [[parseFile()]] - `calls` [EXTRACTED]
- [[parseFilesBatch()]] - `calls` [EXTRACTED]
- [[parser.ts_1]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[buildSymbols()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None