---
source_file: "vendor/graphify/tests/fixtures/sample.jl"
type: "code"
community: "Community None"
degree: 2
location: "L13"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# Circle

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 2

## Architecture Graph
```mermaid
graph LR
    center["Circle"]:::centerNode
    center -->|"defines"| N_fixtures_sample_geometry["geometry"]
    center -->|"inherits"| N_fixtures_sample_shape["Shape"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[Shape]] - `inherits` [EXTRACTED]
- [[geometry]] - `defines` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[Circle]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None