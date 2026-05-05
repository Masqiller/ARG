---
source_file: "vendor/claude-mem/src/services/sync/ChromaSync.ts"
type: "code"
community: "Community None"
degree: 29
location: "L63"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# ChromaSync

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 29

## Architecture Graph
```mermaid
graph LR
    center["ChromaSync"]:::centerNode
    center -->|"imports"| N_vendor_claude_mem_src_services_worker_service_ts["worker-service.ts"]
    center -->|"imports"| N_vendor_claude_mem_src_services_worker_searchmanager_ts["SearchManager.ts"]
    center -->|"imports"| N_vendor_claude_mem_src_services_worker_databasemanager_ts["DatabaseManager.ts"]
    center -->|"imports"| N_vendor_claude_mem_src_services_worker_search_searchorchestrator_ts["SearchOrchestrator.ts"]
    center -->|"imports"| N_vendor_claude_mem_src_services_worker_search_strategies_hybridsearchstrategy_ts["HybridSearchStrategy.ts"]
    center -->|"imports"| N_vendor_claude_mem_src_services_worker_search_strategies_chromasearchstrategy_ts["ChromaSearchStrategy.ts"]
    center -->|"contains"| N_vendor_claude_mem_src_services_sync_chromasync_ts["ChromaSync.ts"]
    center -->|"method"| N_sync_chromasync_chromasync_constructor[".constructor[]"]
    center -->|"method"| N_sync_chromasync_chromasync_ensurecollectionexists[".ensureCollectionExists[]"]
    center -->|"method"| N_sync_chromasync_chromasync_formatobservationdocs[".formatObservationDocs[]"]
    center -->|"method"| N_sync_chromasync_chromasync_formatsummarydocs[".formatSummaryDocs[]"]
    center -->|"method"| N_sync_chromasync_chromasync_adddocuments[".addDocuments[]"]
    center -->|"method"| N_sync_chromasync_chromasync_syncobservation[".syncObservation[]"]
    center -->|"method"| N_sync_chromasync_chromasync_syncsummary[".syncSummary[]"]
    center -->|"method"| N_sync_chromasync_chromasync_formatuserpromptdoc[".formatUserPromptDoc[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[.addDocuments()]] - `method` [EXTRACTED]
- [[.backfillAllProjects()]] - `method` [EXTRACTED]
- [[.backfillObservations()]] - `method` [EXTRACTED]
- [[.backfillPrompts()]] - `method` [EXTRACTED]
- [[.backfillSummaries()]] - `method` [EXTRACTED]
- [[.bootstrapWatermarksFromChroma()]] - `method` [EXTRACTED]
- [[.close()_12]] - `method` [EXTRACTED]
- [[.constructor()_43]] - `method` [EXTRACTED]
- [[.deduplicateQueryResults()]] - `method` [EXTRACTED]
- [[.ensureBackfilled()]] - `method` [EXTRACTED]
- [[.ensureCollectionExists()]] - `method` [EXTRACTED]
- [[.formatObservationDocs()]] - `method` [EXTRACTED]
- [[.formatSummaryDocs()]] - `method` [EXTRACTED]
- [[.formatUserPromptDoc()]] - `method` [EXTRACTED]
- [[.getExistingChromaIds()]] - `method` [EXTRACTED]
- [[.queryChroma()_1]] - `method` [EXTRACTED]
- [[.runBackfillPipeline()]] - `method` [EXTRACTED]
- [[.syncObservation()]] - `method` [EXTRACTED]
- [[.syncSummary()]] - `method` [EXTRACTED]
- [[.syncUserPrompt()]] - `method` [EXTRACTED]
- [[.updateMergedIntoProject()]] - `method` [EXTRACTED]
- [[ChromaSearchStrategy.ts]] - `imports` [EXTRACTED]
- [[ChromaSync.ts]] - `contains` [EXTRACTED]
- [[DatabaseManager.ts]] - `imports` [EXTRACTED]
- [[HybridSearchStrategy.ts]] - `imports` [EXTRACTED]
- [[SearchManager.ts]] - `imports` [EXTRACTED]
- [[SearchOrchestrator.ts]] - `imports` [EXTRACTED]
- [[WorktreeAdoption.ts]] - `imports` [EXTRACTED]
- [[worker-service.ts]] - `imports` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[ChromaSync]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None