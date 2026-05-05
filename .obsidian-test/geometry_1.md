---
source_file: "vendor/graphify/tests/fixtures/sample.f90"
type: "code"
community: "Community None"
degree: 1
location: "L32"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# geometry

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 1

## Architecture Graph
```mermaid
graph LR
    center["geometry"]:::centerNode
    center -->|"imports"| N_fixtures_sample_main["main[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[main()_1]] - `imports` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[geometry_1]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None