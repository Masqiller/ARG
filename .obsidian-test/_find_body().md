---
source_file: "vendor/graphify/graphify/extract.py"
type: "code"
community: "Community None"
degree: 2
location: "L209"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# _find_body()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 2

## Architecture Graph
```mermaid
graph LR
    center["_find_body[]"]:::centerNode
    center -->|"contains"| N_vendor_graphify_graphify_extract_py["extract.py"]
    center -->|"rationale_for"| N_graphify_extract_rationale_210["Find the body node using config.body_field, falling back to child types."]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[Find the body node using config.body_field, falling back to child types.]] - `rationale_for` [EXTRACTED]
- [[extract.py]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[_find_body()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None