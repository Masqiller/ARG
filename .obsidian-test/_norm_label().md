---
source_file: "vendor/graphify/graphify/build.py"
type: "code"
community: "Community None"
degree: 3
location: "L155"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# _norm_label()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 3

## Architecture Graph
```mermaid
graph LR
    center["_norm_label[]"]:::centerNode
    center -->|"contains"| N_vendor_graphify_graphify_build_py["build.py"]
    center -->|"calls"| N_graphify_build_deduplicate_by_label["deduplicate_by_label[]"]
    center -->|"rationale_for"| N_graphify_build_rationale_156["Canonical dedup key — lowercase, alphanumeric only."]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[Canonical dedup key — lowercase, alphanumeric only.]] - `rationale_for` [EXTRACTED]
- [[build.py]] - `contains` [EXTRACTED]
- [[deduplicate_by_label()]] - `calls` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[_norm_label()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None