---
source_file: "vendor/claude-mem/src/services/smart-file-read/parser.ts"
type: "code"
community: "Community None"
degree: 28
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# parser.ts

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 28

## Architecture Graph
```mermaid
graph LR
    center["parser.ts"]:::centerNode
    center -->|"imports_from"| N_vendor_claude_mem_src_servers_mcp_server_ts["mcp-server.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_services_smart_file_read_search_ts["search.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_utils_logger_ts["logger.ts"]
    center -->|"imports"| N_utils_logger_logger["Logger"]
    center -->|"contains"| N_smart_file_read_parser_detectlanguagewithusergrammars["detectLanguageWithUserGrammars[]"]
    center -->|"contains"| N_smart_file_read_parser_getuserawarequerykey["getUserAwareQueryKey[]"]
    center -->|"contains"| N_smart_file_read_parser_loadusergrammars["loadUserGrammars[]"]
    center -->|"contains"| N_smart_file_read_parser_resolvegrammarpath["resolveGrammarPath[]"]
    center -->|"contains"| N_smart_file_read_parser_resolvegrammarpathwithfallback["resolveGrammarPathWithFallback[]"]
    center -->|"contains"| N_smart_file_read_parser_getquerykey["getQueryKey[]"]
    center -->|"contains"| N_smart_file_read_parser_getqueryfile["getQueryFile[]"]
    center -->|"contains"| N_smart_file_read_parser_gettreesitterbin["getTreeSitterBin[]"]
    center -->|"contains"| N_smart_file_read_parser_runquery["runQuery[]"]
    center -->|"contains"| N_smart_file_read_parser_runbatchquery["runBatchQuery[]"]
    center -->|"contains"| N_smart_file_read_parser_parsemultifilequeryoutput["parseMultiFileQueryOutput[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[Logger]] - `imports` [EXTRACTED]
- [[buildSymbols()]] - `contains` [EXTRACTED]
- [[detectLanguageWithUserGrammars()]] - `contains` [EXTRACTED]
- [[extractSignatureFromLines()]] - `contains` [EXTRACTED]
- [[findCommentAbove()]] - `contains` [EXTRACTED]
- [[findContainingHeadingLevel()]] - `contains` [EXTRACTED]
- [[findPythonDocstringFromLines()]] - `contains` [EXTRACTED]
- [[formatFoldedView()]] - `contains` [EXTRACTED]
- [[formatMarkdownFoldedView()]] - `contains` [EXTRACTED]
- [[formatSymbol()]] - `contains` [EXTRACTED]
- [[getQueryFile()]] - `contains` [EXTRACTED]
- [[getQueryKey()]] - `contains` [EXTRACTED]
- [[getSymbolIcon()]] - `contains` [EXTRACTED]
- [[getTreeSitterBin()]] - `contains` [EXTRACTED]
- [[getUserAwareQueryKey()]] - `contains` [EXTRACTED]
- [[isExported()]] - `contains` [EXTRACTED]
- [[loadUserGrammars()]] - `contains` [EXTRACTED]
- [[logger.ts]] - `imports_from` [EXTRACTED]
- [[mcp-server.ts]] - `imports_from` [EXTRACTED]
- [[parseFile()]] - `contains` [EXTRACTED]
- [[parseFilesBatch()]] - `contains` [EXTRACTED]
- [[parseMultiFileQueryOutput()]] - `contains` [EXTRACTED]
- [[resolveGrammarPath()]] - `contains` [EXTRACTED]
- [[resolveGrammarPathWithFallback()]] - `contains` [EXTRACTED]
- [[runBatchQuery()]] - `contains` [EXTRACTED]
- [[runQuery()]] - `contains` [EXTRACTED]
- [[search.ts]] - `imports_from` [EXTRACTED]
- [[unfoldSymbol()]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[parser.ts_1]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None