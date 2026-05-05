---
source_file: "vendor/claude-mem/src/services/smart-file-read/parser.ts"
type: "code"
community: "Community None"
degree: 11
location: "L804"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# parseFilesBatch()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 11

## Architecture Graph
```mermaid
graph LR
    center["parseFilesBatch[]"]:::centerNode
    center -->|"imports"| N_vendor_claude_mem_src_services_smart_file_read_search_ts["search.ts"]
    center -->|"calls"| N_smart_file_read_search_searchcodebase["searchCodebase[]"]
    center -->|"contains"| N_vendor_claude_mem_src_services_smart_file_read_parser_ts["parser.ts"]
    center -->|"calls"| N_smart_file_read_parser_detectlanguagewithusergrammars["detectLanguageWithUserGrammars[]"]
    center -->|"calls"| N_smart_file_read_parser_getuserawarequerykey["getUserAwareQueryKey[]"]
    center -->|"calls"| N_smart_file_read_parser_loadusergrammars["loadUserGrammars[]"]
    center -->|"calls"| N_smart_file_read_parser_resolvegrammarpathwithfallback["resolveGrammarPathWithFallback[]"]
    center -->|"calls"| N_smart_file_read_parser_getqueryfile["getQueryFile[]"]
    center -->|"calls"| N_smart_file_read_parser_runbatchquery["runBatchQuery[]"]
    center -->|"calls"| N_smart_file_read_parser_buildsymbols["buildSymbols[]"]
    center -->|"calls"| N_smart_file_read_parser_formatfoldedview["formatFoldedView[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[buildSymbols()]] - `calls` [EXTRACTED]
- [[detectLanguageWithUserGrammars()]] - `calls` [EXTRACTED]
- [[formatFoldedView()]] - `calls` [EXTRACTED]
- [[getQueryFile()]] - `calls` [EXTRACTED]
- [[getUserAwareQueryKey()]] - `calls` [EXTRACTED]
- [[loadUserGrammars()]] - `calls` [EXTRACTED]
- [[parser.ts_1]] - `contains` [EXTRACTED]
- [[resolveGrammarPathWithFallback()]] - `calls` [EXTRACTED]
- [[runBatchQuery()]] - `calls` [EXTRACTED]
- [[search.ts]] - `imports` [EXTRACTED]
- [[searchCodebase()]] - `calls` [INFERRED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[parseFilesBatch()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None