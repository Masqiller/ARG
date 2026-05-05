---
source_file: "vendor/graphify/tests/fixtures/sample.f90"
type: "code"
community: "Community None"
degree: 2
location: "L21"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# print_area()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 2

## Architecture Graph
```mermaid
graph LR
    center["print_area[]"]:::centerNode
    center -->|"defines"| N_fixtures_sample_geometry["geometry"]
    center -->|"calls"| N_fixtures_sample_circle_area["circle_area[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[circle_area()]] - `calls` [EXTRACTED]
- [[geometry]] - `defines` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[print_area()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None