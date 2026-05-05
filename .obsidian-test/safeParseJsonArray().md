---
source_file: "vendor/claude-mem/src/services/worker/knowledge/CorpusBuilder.ts"
type: "code"
community: "Community None"
degree: 2
location: "L10"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# safeParseJsonArray()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 2

## Architecture Graph
```mermaid
graph LR
    center["safeParseJsonArray[]"]:::centerNode
    center -->|"contains"| N_vendor_claude_mem_src_services_worker_knowledge_corpusbuilder_ts["CorpusBuilder.ts"]
    center -->|"calls"| N_knowledge_corpusbuilder_corpusbuilder_mapobservationtocorpus[".mapObservationToCorpus[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[.mapObservationToCorpus()]] - `calls` [EXTRACTED]
- [[CorpusBuilder.ts]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[safeParseJsonArray()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None