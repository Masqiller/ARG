---
source_file: "vendor/claude-mem/src/services/worker/knowledge/CorpusBuilder.ts"
type: "code"
community: "Community None"
degree: 16
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# CorpusBuilder.ts

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 16

## Architecture Graph
```mermaid
graph LR
    center["CorpusBuilder.ts"]:::centerNode
    center -->|"imports_from"| N_vendor_claude_mem_src_services_worker_service_ts["worker-service.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_services_worker_search_searchorchestrator_ts["SearchOrchestrator.ts"]
    center -->|"imports"| N_search_searchorchestrator_searchorchestrator["SearchOrchestrator"]
    center -->|"imports_from"| N_vendor_claude_mem_src_services_worker_http_routes_corpusroutes_ts["CorpusRoutes.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_services_worker_knowledge_corpusstore_ts["CorpusStore.ts"]
    center -->|"imports"| N_knowledge_corpusstore_corpusstore["CorpusStore"]
    center -->|"imports_from"| N_vendor_claude_mem_src_utils_logger_ts["logger.ts"]
    center -->|"imports"| N_utils_logger_logger["Logger"]
    center -->|"imports_from"| N_vendor_claude_mem_src_services_sqlite_types_ts["types.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_services_sqlite_sessionstore_ts["SessionStore.ts"]
    center -->|"imports"| N_sqlite_sessionstore_sessionstore["SessionStore"]
    center -->|"imports_from"| N_vendor_claude_mem_src_services_worker_knowledge_corpusrenderer_ts["CorpusRenderer.ts"]
    center -->|"imports"| N_knowledge_corpusrenderer_corpusrenderer["CorpusRenderer"]
    center -->|"imports_from"| N_vendor_claude_mem_src_services_worker_knowledge_types_ts["types.ts"]
    center -->|"contains"| N_knowledge_corpusbuilder_safeparsejsonarray["safeParseJsonArray[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[CorpusBuilder]] - `contains` [EXTRACTED]
- [[CorpusRenderer]] - `imports` [EXTRACTED]
- [[CorpusRenderer.ts]] - `imports_from` [EXTRACTED]
- [[CorpusRoutes.ts]] - `imports_from` [EXTRACTED]
- [[CorpusStore]] - `imports` [EXTRACTED]
- [[CorpusStore.ts]] - `imports_from` [EXTRACTED]
- [[Logger]] - `imports` [EXTRACTED]
- [[SearchOrchestrator]] - `imports` [EXTRACTED]
- [[SearchOrchestrator.ts]] - `imports_from` [EXTRACTED]
- [[SessionStore]] - `imports` [EXTRACTED]
- [[SessionStore.ts]] - `imports_from` [EXTRACTED]
- [[logger.ts]] - `imports_from` [EXTRACTED]
- [[safeParseJsonArray()]] - `contains` [EXTRACTED]
- [[types.ts_6]] - `imports_from` [EXTRACTED]
- [[types.ts_3]] - `imports_from` [EXTRACTED]
- [[worker-service.ts]] - `imports_from` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[CorpusBuilder.ts]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None