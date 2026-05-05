---
source_file: "vendor/graphify/graphify/dedup.py"
type: "code"
community: "Community None"
degree: 4
location: "L234"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# _pick_winner()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 4

## Architecture Graph
```mermaid
graph LR
    center["_pick_winner[]"]:::centerNode
    center -->|"contains"| N_vendor_graphify_graphify_dedup_py["dedup.py"]
    center -->|"calls"| N_graphify_dedup_deduplicate_entities["deduplicate_entities[]"]
    center -->|"calls"| N_graphify_dedup_llm_tiebreak["_llm_tiebreak[]"]
    center -->|"rationale_for"| N_graphify_dedup_rationale_235["Pick the canonical survivor: prefer no chunk suffix, then shorter ID."]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[Pick the canonical survivor prefer no chunk suffix, then shorter ID.]] - `rationale_for` [EXTRACTED]
- [[_llm_tiebreak()]] - `calls` [EXTRACTED]
- [[dedup.py]] - `contains` [EXTRACTED]
- [[deduplicate_entities()]] - `calls` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[_pick_winner()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None