---
source_file: "vendor/graphify/graphify/dedup.py"
type: "code"
community: "Community None"
degree: 5
location: "L17"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# _norm()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 5

## Architecture Graph
```mermaid
graph LR
    center["_norm[]"]:::centerNode
    center -->|"contains"| N_vendor_graphify_graphify_dedup_py["dedup.py"]
    center -->|"calls"| N_graphify_dedup_entropy["_entropy[]"]
    center -->|"calls"| N_graphify_dedup_deduplicate_entities["deduplicate_entities[]"]
    center -->|"calls"| N_graphify_dedup_llm_tiebreak["_llm_tiebreak[]"]
    center -->|"rationale_for"| N_graphify_dedup_rationale_18["Lowercase + collapse non-alphanumeric runs to space."]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[Lowercase + collapse non-alphanumeric runs to space.]] - `rationale_for` [EXTRACTED]
- [[_entropy()]] - `calls` [EXTRACTED]
- [[_llm_tiebreak()]] - `calls` [EXTRACTED]
- [[dedup.py]] - `contains` [EXTRACTED]
- [[deduplicate_entities()]] - `calls` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[_norm()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None