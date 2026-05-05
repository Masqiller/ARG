---
source_file: "vendor/claude-mem/src/services/worker/http/routes/CorpusRoutes.ts"
type: "code"
community: "Community None"
degree: 5
location: "L60"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# CorpusRoutes

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 5

## Architecture Graph
```mermaid
graph LR
    center["CorpusRoutes"]:::centerNode
    center -->|"imports"| N_vendor_claude_mem_tests_worker_http_routes_corpus_routes_coercion_test_ts["corpus-routes-coercion.test.ts"]
    center -->|"imports"| N_vendor_claude_mem_src_services_worker_service_ts["worker-service.ts"]
    center -->|"contains"| N_vendor_claude_mem_src_services_worker_http_routes_corpusroutes_ts["CorpusRoutes.ts"]
    center -->|"method"| N_routes_corpusroutes_corpusroutes_constructor[".constructor[]"]
    center -->|"method"| N_routes_corpusroutes_corpusroutes_setuproutes[".setupRoutes[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[.constructor()_23]] - `method` [EXTRACTED]
- [[.setupRoutes()_6]] - `method` [EXTRACTED]
- [[CorpusRoutes.ts]] - `contains` [EXTRACTED]
- [[corpus-routes-coercion.test.ts]] - `imports` [EXTRACTED]
- [[worker-service.ts]] - `imports` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[CorpusRoutes]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None