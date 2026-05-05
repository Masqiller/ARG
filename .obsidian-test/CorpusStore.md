---
source_file: "vendor/claude-mem/src/services/worker/knowledge/CorpusStore.ts"
type: "code"
community: "Community None"
degree: 12
location: "L10"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# CorpusStore

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 12

## Architecture Graph
```mermaid
graph LR
    center["CorpusStore"]:::centerNode
    center -->|"imports"| N_vendor_claude_mem_src_services_worker_service_ts["worker-service.ts"]
    center -->|"imports"| N_vendor_claude_mem_src_services_worker_http_routes_corpusroutes_ts["CorpusRoutes.ts"]
    center -->|"imports"| N_vendor_claude_mem_src_services_worker_knowledge_knowledgeagent_ts["KnowledgeAgent.ts"]
    center -->|"contains"| N_vendor_claude_mem_src_services_worker_knowledge_corpusstore_ts["CorpusStore.ts"]
    center -->|"method"| N_knowledge_corpusstore_corpusstore_constructor[".constructor[]"]
    center -->|"method"| N_knowledge_corpusstore_corpusstore_write[".write[]"]
    center -->|"method"| N_knowledge_corpusstore_corpusstore_read[".read[]"]
    center -->|"method"| N_knowledge_corpusstore_corpusstore_list[".list[]"]
    center -->|"method"| N_knowledge_corpusstore_corpusstore_delete[".delete[]"]
    center -->|"method"| N_knowledge_corpusstore_corpusstore_validatecorpusname[".validateCorpusName[]"]
    center -->|"method"| N_knowledge_corpusstore_corpusstore_getfilepath[".getFilePath[]"]
    center -->|"imports"| N_vendor_claude_mem_src_services_worker_knowledge_corpusbuilder_ts["CorpusBuilder.ts"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[.constructor()_28]] - `method` [EXTRACTED]
- [[.delete()_3]] - `method` [EXTRACTED]
- [[.getFilePath()]] - `method` [EXTRACTED]
- [[.list()]] - `method` [EXTRACTED]
- [[.read()_1]] - `method` [EXTRACTED]
- [[.validateCorpusName()]] - `method` [EXTRACTED]
- [[.write()]] - `method` [EXTRACTED]
- [[CorpusBuilder.ts]] - `imports` [EXTRACTED]
- [[CorpusRoutes.ts]] - `imports` [EXTRACTED]
- [[CorpusStore.ts]] - `contains` [EXTRACTED]
- [[KnowledgeAgent.ts]] - `imports` [EXTRACTED]
- [[worker-service.ts]] - `imports` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[CorpusStore]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None