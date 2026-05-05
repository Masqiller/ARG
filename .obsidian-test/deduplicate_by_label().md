---
source_file: "vendor/graphify/graphify/build.py"
type: "code"
community: "Community None"
degree: 4
location: "L160"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# deduplicate_by_label()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 4

## Architecture Graph
```mermaid
graph LR
    center["deduplicate_by_label[]"]:::centerNode
    center -->|"contains"| N_vendor_graphify_graphify_build_py["build.py"]
    center -->|"calls"| N_graphify_build_norm_label["_norm_label[]"]
    center -->|"rationale_for"| N_graphify_build_rationale_161["Merge nodes that share a normalised label, rewriting edge references.      Prefe"]
    center -->|"calls"| N_knowledge_corpusstore_corpusstore_list[".list[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[.list()]] - `calls` [INFERRED]
- [[Merge nodes that share a normalised label, rewriting edge references.      Prefe]] - `rationale_for` [EXTRACTED]
- [[_norm_label()]] - `calls` [EXTRACTED]
- [[build.py]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[deduplicate_by_label()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None