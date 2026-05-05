---
source_file: "vendor/graphify/graphify/dedup.py"
type: "rationale"
community: "Community None"
degree: 1
location: "L256"
tags:
  - graphify/rationale
  - graphify/EXTRACTED
  - community/Community_None
---

# Batch-resolve ambiguous pairs (score in [low, high)) via LLM.

> [!info] Properties
> **File Type**: rationale
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 1

## Architecture Graph
```mermaid
graph LR
    center["Batch-resolve ambiguous pairs [score in [low, high]] via LLM."]:::centerNode
    center -->|"rationale_for"| N_graphify_dedup_llm_tiebreak["_llm_tiebreak[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[_llm_tiebreak()]] - `rationale_for` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[Batch-resolve ambiguous pairs (score in low, high)) via LLM.]]
```

#graphify/rationale #graphify/EXTRACTED #community/Community_None