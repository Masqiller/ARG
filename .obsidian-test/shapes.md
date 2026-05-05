---
source_file: "vendor/graphify/tests/fixtures/sample.F90"
type: "code"
community: "Community None"
degree: 2
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# shapes

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 2

## Architecture Graph
```mermaid
graph LR
    center["shapes"]:::centerNode
    center -->|"defines"| N_vendor_graphify_tests_fixtures_sample_f90["sample.f90"]
    center -->|"defines"| N_fixtures_sample_compute_volume["compute_volume[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[compute_volume()]] - `defines` [EXTRACTED]
- [[sample.f90]] - `defines` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[shapes]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None