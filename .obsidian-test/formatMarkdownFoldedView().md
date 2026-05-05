---
source_file: "vendor/claude-mem/src/services/smart-file-read/parser.ts"
type: "code"
community: "Community None"
degree: 3
location: "L888"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# formatMarkdownFoldedView()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 3

## Architecture Graph
```mermaid
graph LR
    center["formatMarkdownFoldedView[]"]:::centerNode
    center -->|"contains"| N_vendor_claude_mem_src_services_smart_file_read_parser_ts["parser.ts"]
    center -->|"calls"| N_smart_file_read_parser_formatfoldedview["formatFoldedView[]"]
    center -->|"calls"| N_smart_file_read_parser_findcontainingheadinglevel["findContainingHeadingLevel[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[findContainingHeadingLevel()]] - `calls` [EXTRACTED]
- [[formatFoldedView()]] - `calls` [EXTRACTED]
- [[parser.ts_1]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[formatMarkdownFoldedView()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None