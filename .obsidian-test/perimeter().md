---
source_file: "vendor/graphify/tests/fixtures/sample.jl"
type: "code"
community: "Community None"
degree: 1
location: "L26"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# perimeter()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 1

## Architecture Graph
```mermaid
graph LR
    center["perimeter[]"]:::centerNode
    center -->|"defines"| N_fixtures_sample_geometry["geometry"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[geometry]] - `defines` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[perimeter()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None