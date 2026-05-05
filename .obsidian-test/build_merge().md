---
source_file: "vendor/graphify/graphify/build.py"
type: "code"
community: "Community None"
degree: 4
location: "L206"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# build_merge()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 4

## Architecture Graph
```mermaid
graph LR
    center["build_merge[]"]:::centerNode
    center -->|"contains"| N_vendor_graphify_graphify_build_py["build.py"]
    center -->|"calls"| N_graphify_build_build["build[]"]
    center -->|"rationale_for"| N_graphify_build_rationale_215["Load existing graph.json, merge new chunks into it, and save back.      Never re"]
    center -->|"calls"| N_knowledge_corpusstore_corpusstore_list[".list[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[.list()]] - `calls` [INFERRED]
- [[Load existing graph.json, merge new chunks into it, and save back.      Never re]] - `rationale_for` [EXTRACTED]
- [[build()]] - `calls` [EXTRACTED]
- [[build.py]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[build_merge()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None