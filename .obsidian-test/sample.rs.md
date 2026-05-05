---
source_file: "vendor/graphify/tests/fixtures/sample.rs"
type: "code"
community: "Community None"
degree: 2
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# sample.rs

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 2

## Architecture Graph
```mermaid
graph LR
    center["sample.rs"]:::centerNode
    center -->|"contains"| N_fixtures_sample_graph["Graph"]
    center -->|"contains"| N_fixtures_sample_build_graph["build_graph[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[Graph]] - `contains` [EXTRACTED]
- [[build_graph()]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[sample.rs]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None