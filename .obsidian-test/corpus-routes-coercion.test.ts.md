---
source_file: "vendor/claude-mem/tests/worker/http/routes/corpus-routes-coercion.test.ts"
type: "code"
community: "Community None"
degree: 6
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# corpus-routes-coercion.test.ts

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 6

## Architecture Graph
```mermaid
graph LR
    center["corpus-routes-coercion.test.ts"]:::centerNode
    center -->|"imports_from"| N_vendor_claude_mem_src_services_worker_http_routes_corpusroutes_ts["CorpusRoutes.ts"]
    center -->|"imports"| N_routes_corpusroutes_corpusroutes["CorpusRoutes"]
    center -->|"contains"| N_routes_corpus_routes_coercion_test_createmockreqres["createMockReqRes[]"]
    center -->|"contains"| N_routes_corpus_routes_coercion_test_createcorpus["createCorpus[]"]
    center -->|"contains"| N_routes_corpus_routes_coercion_test_flushpromises["flushPromises[]"]
    center -->|"contains"| N_routes_corpus_routes_coercion_test_capturechain["captureChain[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[CorpusRoutes]] - `imports` [EXTRACTED]
- [[CorpusRoutes.ts]] - `imports_from` [EXTRACTED]
- [[captureChain()_2]] - `contains` [EXTRACTED]
- [[createCorpus()]] - `contains` [EXTRACTED]
- [[createMockReqRes()_2]] - `contains` [EXTRACTED]
- [[flushPromises()]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[corpus-routes-coercion.test.ts]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None