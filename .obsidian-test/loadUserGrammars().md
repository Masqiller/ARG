---
source_file: "vendor/claude-mem/src/services/smart-file-read/parser.ts"
type: "code"
community: "Community None"
degree: 6
location: "L112"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# loadUserGrammars()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 6

## Architecture Graph
```mermaid
graph LR
    center["loadUserGrammars[]"]:::centerNode
    center -->|"imports"| N_vendor_claude_mem_src_services_smart_file_read_search_ts["search.ts"]
    center -->|"calls"| N_smart_file_read_search_searchcodebase["searchCodebase[]"]
    center -->|"contains"| N_vendor_claude_mem_src_services_smart_file_read_parser_ts["parser.ts"]
    center -->|"calls"| N_smart_file_read_parser_resolvegrammarpathwithfallback["resolveGrammarPathWithFallback[]"]
    center -->|"calls"| N_smart_file_read_parser_parsefile["parseFile[]"]
    center -->|"calls"| N_smart_file_read_parser_parsefilesbatch["parseFilesBatch[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[parseFile()]] - `calls` [EXTRACTED]
- [[parseFilesBatch()]] - `calls` [EXTRACTED]
- [[parser.ts_1]] - `contains` [EXTRACTED]
- [[resolveGrammarPathWithFallback()]] - `calls` [EXTRACTED]
- [[search.ts]] - `imports` [EXTRACTED]
- [[searchCodebase()]] - `calls` [INFERRED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[loadUserGrammars()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None