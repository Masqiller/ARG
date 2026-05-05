---
source_file: "vendor/graphify/graphify/build.py"
type: "code"
community: "Community None"
degree: 5
location: "L119"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# build()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 5

## Architecture Graph
```mermaid
graph LR
    center["build[]"]:::centerNode
    center -->|"calls"| N_graphify_dedup_deduplicate_entities["deduplicate_entities[]"]
    center -->|"contains"| N_vendor_graphify_graphify_build_py["build.py"]
    center -->|"calls"| N_graphify_build_build_from_json["build_from_json[]"]
    center -->|"calls"| N_graphify_build_build_merge["build_merge[]"]
    center -->|"rationale_for"| N_graphify_build_rationale_126["Merge multiple extraction results into one graph.      directed=True produces a"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[Merge multiple extraction results into one graph.      directed=True produces a]] - `rationale_for` [EXTRACTED]
- [[build.py]] - `contains` [EXTRACTED]
- [[build_from_json()]] - `calls` [EXTRACTED]
- [[build_merge()]] - `calls` [EXTRACTED]
- [[deduplicate_entities()]] - `calls` [INFERRED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[build()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None