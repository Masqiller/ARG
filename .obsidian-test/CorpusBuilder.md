---
source_file: "vendor/claude-mem/src/services/worker/knowledge/CorpusBuilder.ts"
type: "code"
community: "Community None"
degree: 7
location: "L26"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# CorpusBuilder

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 7

## Architecture Graph
```mermaid
graph LR
    center["CorpusBuilder"]:::centerNode
    center -->|"imports"| N_vendor_claude_mem_src_services_worker_service_ts["worker-service.ts"]
    center -->|"imports"| N_vendor_claude_mem_src_services_worker_http_routes_corpusroutes_ts["CorpusRoutes.ts"]
    center -->|"contains"| N_vendor_claude_mem_src_services_worker_knowledge_corpusbuilder_ts["CorpusBuilder.ts"]
    center -->|"method"| N_knowledge_corpusbuilder_corpusbuilder_constructor[".constructor[]"]
    center -->|"method"| N_knowledge_corpusbuilder_corpusbuilder_build[".build[]"]
    center -->|"method"| N_knowledge_corpusbuilder_corpusbuilder_mapobservationtocorpus[".mapObservationToCorpus[]"]
    center -->|"method"| N_knowledge_corpusbuilder_corpusbuilder_calculatestats[".calculateStats[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[.build()]] - `method` [EXTRACTED]
- [[.calculateStats()]] - `method` [EXTRACTED]
- [[.constructor()_29]] - `method` [EXTRACTED]
- [[.mapObservationToCorpus()]] - `method` [EXTRACTED]
- [[CorpusBuilder.ts]] - `contains` [EXTRACTED]
- [[CorpusRoutes.ts]] - `imports` [EXTRACTED]
- [[worker-service.ts]] - `imports` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[CorpusBuilder]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None