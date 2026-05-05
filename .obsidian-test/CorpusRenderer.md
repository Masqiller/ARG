---
source_file: "vendor/claude-mem/src/services/worker/knowledge/CorpusRenderer.ts"
type: "code"
community: "Community None"
degree: 7
location: "L4"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# CorpusRenderer

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 7

## Architecture Graph
```mermaid
graph LR
    center["CorpusRenderer"]:::centerNode
    center -->|"imports"| N_vendor_claude_mem_src_services_worker_knowledge_knowledgeagent_ts["KnowledgeAgent.ts"]
    center -->|"imports"| N_vendor_claude_mem_src_services_worker_knowledge_corpusbuilder_ts["CorpusBuilder.ts"]
    center -->|"contains"| N_vendor_claude_mem_src_services_worker_knowledge_corpusrenderer_ts["CorpusRenderer.ts"]
    center -->|"method"| N_knowledge_corpusrenderer_corpusrenderer_rendercorpus[".renderCorpus[]"]
    center -->|"method"| N_knowledge_corpusrenderer_corpusrenderer_renderobservation[".renderObservation[]"]
    center -->|"method"| N_knowledge_corpusrenderer_corpusrenderer_estimatetokens[".estimateTokens[]"]
    center -->|"method"| N_knowledge_corpusrenderer_corpusrenderer_generatesystemprompt[".generateSystemPrompt[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[.estimateTokens()_2]] - `method` [EXTRACTED]
- [[.generateSystemPrompt()]] - `method` [EXTRACTED]
- [[.renderCorpus()]] - `method` [EXTRACTED]
- [[.renderObservation()]] - `method` [EXTRACTED]
- [[CorpusBuilder.ts]] - `imports` [EXTRACTED]
- [[CorpusRenderer.ts]] - `contains` [EXTRACTED]
- [[KnowledgeAgent.ts]] - `imports` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[CorpusRenderer]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None