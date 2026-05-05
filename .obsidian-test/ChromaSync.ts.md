---
source_file: "vendor/claude-mem/src/services/sync/ChromaSync.ts"
type: "code"
community: "Community None"
degree: 18
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# ChromaSync.ts

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 18

## Architecture Graph
```mermaid
graph LR
    center["ChromaSync.ts"]:::centerNode
    center -->|"imports_from"| N_vendor_claude_mem_src_sdk_parser_ts["parser.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_services_worker_service_ts["worker-service.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_services_worker_searchmanager_ts["SearchManager.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_services_worker_databasemanager_ts["DatabaseManager.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_services_worker_search_searchorchestrator_ts["SearchOrchestrator.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_services_worker_search_strategies_hybridsearchstrategy_ts["HybridSearchStrategy.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_services_worker_search_strategies_chromasearchstrategy_ts["ChromaSearchStrategy.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_services_sqlite_sessionstore_ts["SessionStore.ts"]
    center -->|"imports"| N_sqlite_sessionstore_sessionstore["SessionStore"]
    center -->|"imports_from"| N_vendor_claude_mem_src_services_sqlite_observations_files_ts["files.ts"]
    center -->|"imports"| N_observations_files_parsefilelist["parseFileList[]"]
    center -->|"imports_from"| N_vendor_claude_mem_src_services_sync_chromamcpmanager_ts["ChromaMcpManager.ts"]
    center -->|"imports"| N_sync_chromamcpmanager_chromamcpmanager["ChromaMcpManager"]
    center -->|"imports_from"| N_vendor_claude_mem_src_services_sync_chromasyncstate_ts["ChromaSyncState.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_utils_logger_ts["logger.ts"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[ChromaMcpManager]] - `imports` [EXTRACTED]
- [[ChromaMcpManager.ts]] - `imports_from` [EXTRACTED]
- [[ChromaSearchStrategy.ts]] - `imports_from` [EXTRACTED]
- [[ChromaSync]] - `contains` [EXTRACTED]
- [[ChromaSyncState.ts]] - `imports_from` [EXTRACTED]
- [[DatabaseManager.ts]] - `imports_from` [EXTRACTED]
- [[HybridSearchStrategy.ts]] - `imports_from` [EXTRACTED]
- [[Logger]] - `imports` [EXTRACTED]
- [[SearchManager.ts]] - `imports_from` [EXTRACTED]
- [[SearchOrchestrator.ts]] - `imports_from` [EXTRACTED]
- [[SessionStore]] - `imports` [EXTRACTED]
- [[SessionStore.ts]] - `imports_from` [EXTRACTED]
- [[WorktreeAdoption.ts]] - `imports_from` [EXTRACTED]
- [[files.ts]] - `imports_from` [EXTRACTED]
- [[logger.ts]] - `imports_from` [EXTRACTED]
- [[parseFileList()]] - `imports` [EXTRACTED]
- [[parser.ts]] - `imports_from` [EXTRACTED]
- [[worker-service.ts]] - `imports_from` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[ChromaSync.ts]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None