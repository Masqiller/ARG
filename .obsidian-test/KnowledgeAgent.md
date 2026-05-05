---
source_file: "vendor/claude-mem/src/services/worker/knowledge/KnowledgeAgent.ts"
type: "code"
community: "Community None"
degree: 10
location: "L30"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# KnowledgeAgent

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 10

## Architecture Graph
```mermaid
graph LR
    center["KnowledgeAgent"]:::centerNode
    center -->|"imports"| N_vendor_claude_mem_src_services_worker_service_ts["worker-service.ts"]
    center -->|"imports"| N_vendor_claude_mem_src_services_worker_http_routes_corpusroutes_ts["CorpusRoutes.ts"]
    center -->|"contains"| N_vendor_claude_mem_src_services_worker_knowledge_knowledgeagent_ts["KnowledgeAgent.ts"]
    center -->|"method"| N_knowledge_knowledgeagent_knowledgeagent_constructor[".constructor[]"]
    center -->|"method"| N_knowledge_knowledgeagent_knowledgeagent_prime[".prime[]"]
    center -->|"method"| N_knowledge_knowledgeagent_knowledgeagent_query[".query[]"]
    center -->|"method"| N_knowledge_knowledgeagent_knowledgeagent_reprime[".reprime[]"]
    center -->|"method"| N_knowledge_knowledgeagent_knowledgeagent_issessionresumeerror[".isSessionResumeError[]"]
    center -->|"method"| N_knowledge_knowledgeagent_knowledgeagent_executequery[".executeQuery[]"]
    center -->|"method"| N_knowledge_knowledgeagent_knowledgeagent_getmodelid[".getModelId[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[.constructor()_27]] - `method` [EXTRACTED]
- [[.executeQuery()]] - `method` [EXTRACTED]
- [[.getModelId()_1]] - `method` [EXTRACTED]
- [[.isSessionResumeError()]] - `method` [EXTRACTED]
- [[.prime()]] - `method` [EXTRACTED]
- [[.query()]] - `method` [EXTRACTED]
- [[.reprime()]] - `method` [EXTRACTED]
- [[CorpusRoutes.ts]] - `imports` [EXTRACTED]
- [[KnowledgeAgent.ts]] - `contains` [EXTRACTED]
- [[worker-service.ts]] - `imports` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[KnowledgeAgent]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None