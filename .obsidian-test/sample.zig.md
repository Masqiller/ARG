---
source_file: "vendor/graphify/tests/fixtures/sample.zig"
type: "code"
community: "Community None"
degree: 6
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# sample.zig

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 6

## Architecture Graph
```mermaid
graph LR
    center["sample.zig"]:::centerNode
    center -->|"contains"| N_fixtures_sample_shape["Shape"]
    center -->|"contains"| N_fixtures_sample_point["Point"]
    center -->|"contains"| N_fixtures_sample_main["main[]"]
    center -->|"contains"| N_fixtures_sample_color["Color"]
    center -->|"contains"| N_fixtures_sample_add["add[]"]
    center -->|"contains"| N_fixtures_sample_multiply["multiply[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[Color]] - `contains` [EXTRACTED]
- [[Point]] - `contains` [EXTRACTED]
- [[Shape]] - `contains` [EXTRACTED]
- [[add()]] - `contains` [EXTRACTED]
- [[main()_1]] - `contains` [EXTRACTED]
- [[multiply()]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[sample.zig]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None