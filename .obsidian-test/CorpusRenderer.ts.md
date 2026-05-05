---
source_file: "vendor/claude-mem/src/services/worker/knowledge/CorpusRenderer.ts"
type: "code"
community: "Community None"
degree: 4
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# CorpusRenderer.ts

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 4

## Architecture Graph
```mermaid
graph LR
    center["CorpusRenderer.ts"]:::centerNode
    center -->|"imports_from"| N_vendor_claude_mem_src_services_worker_knowledge_knowledgeagent_ts["KnowledgeAgent.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_services_worker_knowledge_corpusbuilder_ts["CorpusBuilder.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_services_worker_knowledge_types_ts["types.ts"]
    center -->|"contains"| N_knowledge_corpusrenderer_corpusrenderer["CorpusRenderer"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[CorpusBuilder.ts]] - `imports_from` [EXTRACTED]
- [[CorpusRenderer]] - `contains` [EXTRACTED]
- [[KnowledgeAgent.ts]] - `imports_from` [EXTRACTED]
- [[types.ts_3]] - `imports_from` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[CorpusRenderer.ts]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None