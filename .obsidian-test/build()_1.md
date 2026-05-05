---
source_file: "vendor/graphify/worked/mixed-corpus/raw/build.py"
type: "code"
community: "Community None"
degree: 3
location: "L31"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# build()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 3

## Architecture Graph
```mermaid
graph LR
    center["build[]"]:::centerNode
    center -->|"contains"| N_vendor_graphify_worked_mixed_corpus_raw_build_py["build.py"]
    center -->|"calls"| N_raw_build_build_from_json["build_from_json[]"]
    center -->|"rationale_for"| N_raw_build_rationale_32["Merge multiple extraction results into one graph."]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[Merge multiple extraction results into one graph.]] - `rationale_for` [EXTRACTED]
- [[build.py_1]] - `contains` [EXTRACTED]
- [[build_from_json()_1]] - `calls` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[build()_1]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None