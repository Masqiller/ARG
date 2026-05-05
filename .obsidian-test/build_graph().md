---
source_file: "vendor/graphify/tests/fixtures/sample.rs"
type: "code"
community: "Community None"
degree: 3
location: "L21"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# build_graph()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 3

## Architecture Graph
```mermaid
graph LR
    center["build_graph[]"]:::centerNode
    center -->|"contains"| N_vendor_graphify_tests_fixtures_sample_rs["sample.rs"]
    center -->|"calls"| N_fixtures_sample_graph_new[".new[]"]
    center -->|"calls"| N_fixtures_sample_graph_add_edge[".add_edge[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[.add_edge()]] - `calls` [EXTRACTED]
- [[.new()]] - `calls` [EXTRACTED]
- [[sample.rs]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[build_graph()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None