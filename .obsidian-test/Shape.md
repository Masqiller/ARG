---
source_file: "vendor/graphify/tests/fixtures/sample.zig"
type: "code"
community: "Community None"
degree: 4
location: "L21"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# Shape

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 4

## Architecture Graph
```mermaid
graph LR
    center["Shape"]:::centerNode
    center -->|"defines"| N_fixtures_sample_geometry["geometry"]
    center -->|"inherits"| N_fixtures_sample_point["Point"]
    center -->|"inherits"| N_fixtures_sample_circle["Circle"]
    center -->|"contains"| N_vendor_graphify_tests_fixtures_sample_zig["sample.zig"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[Circle]] - `inherits` [EXTRACTED]
- [[Point]] - `inherits` [EXTRACTED]
- [[geometry]] - `defines` [EXTRACTED]
- [[sample.zig]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[Shape]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None