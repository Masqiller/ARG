---
source_file: "vendor/graphify/graphify/dedup.py"
type: "code"
community: "Community None"
degree: 9
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# dedup.py

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 9

## Architecture Graph
```mermaid
graph LR
    center["dedup.py"]:::centerNode
    center -->|"contains"| N_graphify_dedup_norm["_norm[]"]
    center -->|"contains"| N_graphify_dedup_entropy["_entropy[]"]
    center -->|"contains"| N_graphify_dedup_shingles["_shingles[]"]
    center -->|"contains"| N_graphify_dedup_make_minhash["_make_minhash[]"]
    center -->|"contains"| N_graphify_dedup_uf["_UF"]
    center -->|"contains"| N_graphify_dedup_deduplicate_entities["deduplicate_entities[]"]
    center -->|"contains"| N_graphify_dedup_pick_winner["_pick_winner[]"]
    center -->|"contains"| N_graphify_dedup_llm_tiebreak["_llm_tiebreak[]"]
    center -->|"rationale_for"| N_graphify_dedup_rationale_1["Entity deduplication pipeline for graphify knowledge graphs.  Pipeline: exact no"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[Entity deduplication pipeline for graphify knowledge graphs.  Pipeline exact no]] - `rationale_for` [EXTRACTED]
- [[_UF]] - `contains` [EXTRACTED]
- [[_entropy()]] - `contains` [EXTRACTED]
- [[_llm_tiebreak()]] - `contains` [EXTRACTED]
- [[_make_minhash()]] - `contains` [EXTRACTED]
- [[_norm()]] - `contains` [EXTRACTED]
- [[_pick_winner()]] - `contains` [EXTRACTED]
- [[_shingles()]] - `contains` [EXTRACTED]
- [[deduplicate_entities()]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[dedup.py]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None