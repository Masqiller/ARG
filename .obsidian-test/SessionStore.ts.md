---
source_file: "vendor/claude-mem/src/services/sqlite/SessionStore.ts"
type: "code"
community: "Community None"
degree: 35
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# SessionStore.ts

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 35

## Architecture Graph
```mermaid
graph LR
    center["SessionStore.ts"]:::centerNode
    center -->|"imports_from"| N_vendor_claude_mem_tests_session_id_usage_validation_test_ts["session_id_usage_validation.test.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_tests_fk_constraint_fix_test_ts["fk-constraint-fix.test.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_tests_session_store_test_ts["session_store.test.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_tests_worker_searchmanager_timeline_anchor_test_ts["SearchManager.timeline-anchor.test.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_tests_services_sqlite_session_store_mark_completed_test_ts["session-store-mark-completed.test.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_tests_services_sqlite_get_observations_by_ids_relevance_test_ts["get-observations-by-ids-relevance.test.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_shared_platform_source_ts["platform-source.ts"]
    center -->|"imports"| N_shared_platform_source_normalizeplatformsource["normalizePlatformSource[]"]
    center -->|"imports"| N_shared_platform_source_sortplatformsources["sortPlatformSources[]"]
    center -->|"imports_from"| N_vendor_claude_mem_src_shared_paths_ts["paths.ts"]
    center -->|"imports"| N_shared_paths_ensuredir["ensureDir[]"]
    center -->|"imports_from"| N_vendor_claude_mem_src_types_database_ts["database.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_services_worker_searchmanager_ts["SearchManager.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_services_worker_databasemanager_ts["DatabaseManager.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_services_worker_search_searchorchestrator_ts["SearchOrchestrator.ts"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[ChromaSearchStrategy.ts]] - `imports_from` [EXTRACTED]
- [[ChromaSync.ts]] - `imports_from` [EXTRACTED]
- [[ContextBuilder.ts]] - `imports_from` [EXTRACTED]
- [[CorpusBuilder.ts]] - `imports_from` [EXTRACTED]
- [[DatabaseManager.ts]] - `imports_from` [EXTRACTED]
- [[HybridSearchStrategy.ts]] - `imports_from` [EXTRACTED]
- [[Logger]] - `imports` [EXTRACTED]
- [[ObservationCompiler.ts]] - `imports_from` [EXTRACTED]
- [[PendingMessageStore]] - `imports` [EXTRACTED]
- [[PendingMessageStore.ts]] - `imports_from` [EXTRACTED]
- [[PrivacyCheckValidator.ts]] - `imports_from` [EXTRACTED]
- [[SearchManager.timeline-anchor.test.ts]] - `imports_from` [EXTRACTED]
- [[SearchManager.ts]] - `imports_from` [EXTRACTED]
- [[SearchOrchestrator.ts]] - `imports_from` [EXTRACTED]
- [[SessionStore]] - `contains` [EXTRACTED]
- [[cleanup-duplicates.ts]] - `imports_from` [EXTRACTED]
- [[computeObservationContentHash()]] - `imports` [EXTRACTED]
- [[database.ts]] - `imports_from` [EXTRACTED]
- [[ensureDir()]] - `imports` [EXTRACTED]
- [[files.ts]] - `imports_from` [EXTRACTED]
- [[fk-constraint-fix.test.ts]] - `imports_from` [EXTRACTED]
- [[get-observations-by-ids-relevance.test.ts]] - `imports_from` [EXTRACTED]
- [[import-xml-observations.ts]] - `imports_from` [EXTRACTED]
- [[logger.ts]] - `imports_from` [EXTRACTED]
- [[normalizePlatformSource()]] - `imports` [EXTRACTED]
- [[parseFileList()]] - `imports` [EXTRACTED]
- [[paths.ts]] - `imports_from` [EXTRACTED]
- [[platform-source.ts]] - `imports_from` [EXTRACTED]
- [[resolveCreateSessionArgs()]] - `contains` [EXTRACTED]
- [[session-store-mark-completed.test.ts]] - `imports_from` [EXTRACTED]
- [[session_id_usage_validation.test.ts]] - `imports_from` [EXTRACTED]
- [[session_store.test.ts]] - `imports_from` [EXTRACTED]
- [[sortPlatformSources()]] - `imports` [EXTRACTED]
- [[store.ts]] - `imports_from` [EXTRACTED]
- [[types.ts_6]] - `imports_from` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[SessionStore.ts]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None