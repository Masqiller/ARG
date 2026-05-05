---
source_file: "vendor/graphify/tests/fixtures/sample.f90"
type: "code"
community: "Community None"
degree: 3
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# sample.f90

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 3

## Architecture Graph
```mermaid
graph LR
    center["sample.f90"]:::centerNode
    center -->|"defines"| N_fixtures_sample_geometry["geometry"]
    center -->|"defines"| N_fixtures_sample_main["main[]"]
    center -->|"defines"| N_fixtures_sample_shapes["shapes"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[geometry]] - `defines` [EXTRACTED]
- [[main()_1]] - `defines` [EXTRACTED]
- [[shapes]] - `defines` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[sample.f90]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None