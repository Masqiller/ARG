---
source_file: "vendor/graphify/tests/fixtures/sample.f90"
type: "code"
community: "Community None"
degree: 14
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# geometry

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 14

## Architecture Graph
```mermaid
graph LR
    center["geometry"]:::centerNode
    center -->|"defines"| N_vendor_graphify_tests_fixtures_sample_jl["sample.jl"]
    center -->|"imports"| N_linearalgebra["LinearAlgebra"]
    center -->|"imports"| N_base["Base"]
    center -->|"defines"| N_fixtures_sample_shape["Shape"]
    center -->|"defines"| N_fixtures_sample_point["Point"]
    center -->|"defines"| N_fixtures_sample_circle["Circle"]
    center -->|"defines"| N_fixtures_sample_area["area[]"]
    center -->|"defines"| N_fixtures_sample_distance["distance[]"]
    center -->|"defines"| N_fixtures_sample_perimeter["perimeter[]"]
    center -->|"defines"| N_fixtures_sample_describe["describe[]"]
    center -->|"defines"| N_vendor_graphify_tests_fixtures_sample_f90["sample.f90"]
    center -->|"imports"| N_constants["constants"]
    center -->|"defines"| N_fixtures_sample_circle_area["circle_area[]"]
    center -->|"defines"| N_fixtures_sample_print_area["print_area[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[Base]] - `imports` [EXTRACTED]
- [[Circle]] - `defines` [EXTRACTED]
- [[LinearAlgebra]] - `imports` [EXTRACTED]
- [[Point]] - `defines` [EXTRACTED]
- [[Shape]] - `defines` [EXTRACTED]
- [[area()]] - `defines` [EXTRACTED]
- [[circle_area()]] - `defines` [EXTRACTED]
- [[constants]] - `imports` [EXTRACTED]
- [[describe()]] - `defines` [EXTRACTED]
- [[distance()]] - `defines` [EXTRACTED]
- [[perimeter()]] - `defines` [EXTRACTED]
- [[print_area()]] - `defines` [EXTRACTED]
- [[sample.f90]] - `defines` [EXTRACTED]
- [[sample.jl]] - `defines` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[geometry]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None