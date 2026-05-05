---
source_file: "vendor/graphify/tests/fixtures/sample.rs"
type: "code"
community: "Community None"
degree: 4
location: "L3"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# Graph

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 4

## Architecture Graph
```mermaid
graph LR
    center["Graph"]:::centerNode
    center -->|"contains"| N_vendor_graphify_tests_fixtures_sample_rs["sample.rs"]
    center -->|"method"| N_fixtures_sample_graph_new[".new[]"]
    center -->|"method"| N_fixtures_sample_graph_add_node[".add_node[]"]
    center -->|"method"| N_fixtures_sample_graph_add_edge[".add_edge[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[.add_edge()]] - `method` [EXTRACTED]
- [[.add_node()]] - `method` [EXTRACTED]
- [[.new()]] - `method` [EXTRACTED]
- [[sample.rs]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[Graph]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None