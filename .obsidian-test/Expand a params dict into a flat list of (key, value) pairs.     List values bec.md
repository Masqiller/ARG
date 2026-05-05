---
source_file: "vendor/graphify/worked/httpx/raw/utils.py"
type: "rationale"
community: "Community None"
degree: 1
location: "L25"
tags:
  - graphify/rationale
  - graphify/EXTRACTED
  - community/Community_None
---

# Expand a params dict into a flat list of (key, value) pairs.     List values bec

> [!info] Properties
> **File Type**: rationale
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 1

## Architecture Graph
```mermaid
graph LR
    center["Expand a params dict into a flat list of [key, value] pairs.     List values bec"]:::centerNode
    center -->|"rationale_for"| N_raw_utils_flatten_queryparams["flatten_queryparams[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[flatten_queryparams()]] - `rationale_for` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[Expand a params dict into a flat list of (key, value) pairs.     List values bec]]
```

#graphify/rationale #graphify/EXTRACTED #community/Community_None