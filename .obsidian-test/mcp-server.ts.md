---
source_file: "vendor/claude-mem/src/servers/mcp-server.ts"
type: "code"
community: "Community None"
degree: 28
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# mcp-server.ts

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 28

## Architecture Graph
```mermaid
graph LR
    center["mcp-server.ts"]:::centerNode
    center -->|"imports_from"| N_vendor_claude_mem_src_utils_logger_ts["logger.ts"]
    center -->|"imports"| N_utils_logger_logger["Logger"]
    center -->|"imports_from"| N_vendor_claude_mem_src_shared_worker_utils_ts["worker-utils.ts"]
    center -->|"imports"| N_shared_worker_utils_getworkerport["getWorkerPort[]"]
    center -->|"imports"| N_shared_worker_utils_workerhttprequest["workerHttpRequest[]"]
    center -->|"imports_from"| N_vendor_claude_mem_src_services_worker_spawner_ts["worker-spawner.ts"]
    center -->|"imports"| N_services_worker_spawner_ensureworkerstarted["ensureWorkerStarted[]"]
    center -->|"imports_from"| N_vendor_claude_mem_src_services_smart_file_read_search_ts["search.ts"]
    center -->|"imports"| N_smart_file_read_search_searchcodebase["searchCodebase[]"]
    center -->|"imports"| N_smart_file_read_search_formatsearchresults["formatSearchResults[]"]
    center -->|"imports_from"| N_vendor_claude_mem_src_services_smart_file_read_parser_ts["parser.ts"]
    center -->|"imports"| N_smart_file_read_parser_parsefile["parseFile[]"]
    center -->|"imports"| N_smart_file_read_parser_formatfoldedview["formatFoldedView[]"]
    center -->|"imports"| N_smart_file_read_parser_unfoldsymbol["unfoldSymbol[]"]
    center -->|"contains"| N_servers_mcp_server_errorifworkerscriptmissing["errorIfWorkerScriptMissing[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[Logger]] - `imports` [EXTRACTED]
- [[attachStdioLifecycle()]] - `contains` [EXTRACTED]
- [[callWorkerAPI()]] - `contains` [EXTRACTED]
- [[callWorkerAPIPost()]] - `contains` [EXTRACTED]
- [[checkMarketplaceMarker()]] - `contains` [EXTRACTED]
- [[cleanup()_2]] - `contains` [EXTRACTED]
- [[detachStdioLifecycle()]] - `contains` [EXTRACTED]
- [[ensureWorkerConnection()]] - `contains` [EXTRACTED]
- [[ensureWorkerStarted()]] - `imports` [EXTRACTED]
- [[errorIfWorkerScriptMissing()]] - `contains` [EXTRACTED]
- [[executeWorkerPostRequest()]] - `contains` [EXTRACTED]
- [[formatFoldedView()]] - `imports` [EXTRACTED]
- [[formatSearchResults()]] - `imports` [EXTRACTED]
- [[getWorkerPort()]] - `imports` [EXTRACTED]
- [[handleStdioClosed()]] - `contains` [EXTRACTED]
- [[handleStdioError()]] - `contains` [EXTRACTED]
- [[logger.ts]] - `imports_from` [EXTRACTED]
- [[main()_20]] - `contains` [EXTRACTED]
- [[parseFile()]] - `imports` [EXTRACTED]
- [[parser.ts_1]] - `imports_from` [EXTRACTED]
- [[search.ts]] - `imports_from` [EXTRACTED]
- [[searchCodebase()]] - `imports` [EXTRACTED]
- [[startParentHeartbeat()]] - `contains` [EXTRACTED]
- [[unfoldSymbol()]] - `imports` [EXTRACTED]
- [[verifyWorkerConnection()]] - `contains` [EXTRACTED]
- [[worker-spawner.ts]] - `imports_from` [EXTRACTED]
- [[worker-utils.ts]] - `imports_from` [EXTRACTED]
- [[workerHttpRequest()]] - `imports` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[mcp-server.ts]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None