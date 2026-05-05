---
source_file: "vendor/claude-mem/src/services/worker/http/routes/CorpusRoutes.ts"
type: "code"
community: "Community None"
degree: 13
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# CorpusRoutes.ts

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 13

## Architecture Graph
```mermaid
graph LR
    center["CorpusRoutes.ts"]:::centerNode
    center -->|"imports_from"| N_vendor_claude_mem_tests_worker_http_routes_corpus_routes_coercion_test_ts["corpus-routes-coercion.test.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_services_worker_service_ts["worker-service.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_services_worker_http_baseroutehandler_ts["BaseRouteHandler.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_services_worker_http_middleware_validatebody_ts["validateBody.ts"]
    center -->|"imports"| N_middleware_validatebody_validatebody["validateBody[]"]
    center -->|"imports_from"| N_vendor_claude_mem_src_services_worker_knowledge_corpusstore_ts["CorpusStore.ts"]
    center -->|"imports"| N_knowledge_corpusstore_corpusstore["CorpusStore"]
    center -->|"imports_from"| N_vendor_claude_mem_src_services_worker_knowledge_corpusbuilder_ts["CorpusBuilder.ts"]
    center -->|"imports"| N_knowledge_corpusbuilder_corpusbuilder["CorpusBuilder"]
    center -->|"imports_from"| N_vendor_claude_mem_src_services_worker_knowledge_knowledgeagent_ts["KnowledgeAgent.ts"]
    center -->|"imports"| N_knowledge_knowledgeagent_knowledgeagent["KnowledgeAgent"]
    center -->|"imports_from"| N_vendor_claude_mem_src_services_worker_knowledge_types_ts["types.ts"]
    center -->|"contains"| N_routes_corpusroutes_corpusroutes["CorpusRoutes"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[BaseRouteHandler.ts]] - `imports_from` [EXTRACTED]
- [[CorpusBuilder]] - `imports` [EXTRACTED]
- [[CorpusBuilder.ts]] - `imports_from` [EXTRACTED]
- [[CorpusRoutes]] - `contains` [EXTRACTED]
- [[CorpusStore]] - `imports` [EXTRACTED]
- [[CorpusStore.ts]] - `imports_from` [EXTRACTED]
- [[KnowledgeAgent]] - `imports` [EXTRACTED]
- [[KnowledgeAgent.ts]] - `imports_from` [EXTRACTED]
- [[corpus-routes-coercion.test.ts]] - `imports_from` [EXTRACTED]
- [[types.ts_3]] - `imports_from` [EXTRACTED]
- [[validateBody()]] - `imports` [EXTRACTED]
- [[validateBody.ts]] - `imports_from` [EXTRACTED]
- [[worker-service.ts]] - `imports_from` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[CorpusRoutes.ts]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None