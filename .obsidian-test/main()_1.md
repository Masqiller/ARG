---
source_file: "vendor/graphify/tests/fixtures/sample.cpp"
type: "code"
community: "Community None"
degree: 12
location: "L25"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# main()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 12

## Architecture Graph
```mermaid
graph LR
    center["main[]"]:::centerNode
    center -->|"contains"| N_vendor_graphify_tests_fixtures_sample_c["sample.c"]
    center -->|"calls"| N_fixtures_sample_process["process[]"]
    center -->|"contains"| N_vendor_graphify_tests_fixtures_sample_zig["sample.zig"]
    center -->|"calls"| N_fixtures_sample_add["add[]"]
    center -->|"calls"| N_fixtures_sample_multiply["multiply[]"]
    center -->|"contains"| N_vendor_graphify_tests_fixtures_sample_go["sample.go"]
    center -->|"calls"| N_fixtures_sample_newserver["NewServer[]"]
    center -->|"calls"| N_fixtures_server_start[".Start[]"]
    center -->|"defines"| N_vendor_graphify_tests_fixtures_sample_f90["sample.f90"]
    center -->|"imports"| N_geometry["geometry"]
    center -->|"calls"| N_fixtures_sample_circle_area["circle_area[]"]
    center -->|"contains"| N_vendor_graphify_tests_fixtures_sample_cpp["sample.cpp"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[.Start()]] - `calls` [EXTRACTED]
- [[NewServer()]] - `calls` [EXTRACTED]
- [[add()]] - `calls` [EXTRACTED]
- [[circle_area()]] - `calls` [EXTRACTED]
- [[geometry_1]] - `imports` [EXTRACTED]
- [[multiply()]] - `calls` [EXTRACTED]
- [[process()]] - `calls` [EXTRACTED]
- [[sample.c]] - `contains` [EXTRACTED]
- [[sample.cpp]] - `contains` [EXTRACTED]
- [[sample.f90]] - `defines` [EXTRACTED]
- [[sample.go]] - `contains` [EXTRACTED]
- [[sample.zig]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[main()_1]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None