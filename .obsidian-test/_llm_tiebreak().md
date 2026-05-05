---
source_file: "vendor/graphify/graphify/dedup.py"
type: "code"
community: "Community None"
degree: 7
location: "L246"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# _llm_tiebreak()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 7

## Architecture Graph
```mermaid
graph LR
    center["_llm_tiebreak[]"]:::centerNode
    center -->|"contains"| N_vendor_graphify_graphify_dedup_py["dedup.py"]
    center -->|"calls"| N_graphify_dedup_norm["_norm[]"]
    center -->|"calls"| N_graphify_dedup_uf_find[".find[]"]
    center -->|"calls"| N_graphify_dedup_uf_union[".union[]"]
    center -->|"calls"| N_graphify_dedup_deduplicate_entities["deduplicate_entities[]"]
    center -->|"calls"| N_graphify_dedup_pick_winner["_pick_winner[]"]
    center -->|"rationale_for"| N_graphify_dedup_rationale_256["Batch-resolve ambiguous pairs [score in [low, high]] via LLM."]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[.find()]] - `calls` [EXTRACTED]
- [[.union()]] - `calls` [EXTRACTED]
- [[Batch-resolve ambiguous pairs (score in low, high)) via LLM.]] - `rationale_for` [EXTRACTED]
- [[_norm()]] - `calls` [EXTRACTED]
- [[_pick_winner()]] - `calls` [EXTRACTED]
- [[dedup.py]] - `contains` [EXTRACTED]
- [[deduplicate_entities()]] - `calls` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[_llm_tiebreak()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None