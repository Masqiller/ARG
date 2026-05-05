---
source_file: "vendor/graphify/graphify/serve.py"
type: "code"
community: "Community None"
degree: 6
location: "L32"
tags:
  - graphify/code
  - graphify/INFERRED
  - community/Community_None
---

# _communities_from_graph()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 6

## Architecture Graph
```mermaid
graph LR
    center["_communities_from_graph[]"]:::centerNode
    center -->|"calls"| N_tests_test_serve_test_communities_from_graph_basic["test_communities_from_graph_basic[]"]
    center -->|"calls"| N_tests_test_serve_test_communities_from_graph_no_community_attr["test_communities_from_graph_no_community_attr[]"]
    center -->|"calls"| N_tests_test_serve_test_communities_from_graph_isolated["test_communities_from_graph_isolated[]"]
    center -->|"contains"| N_vendor_graphify_graphify_serve_py["serve.py"]
    center -->|"calls"| N_graphify_serve_serve["serve[]"]
    center -->|"rationale_for"| N_graphify_serve_rationale_33["Reconstruct community dict from community property stored on nodes."]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[Reconstruct community dict from community property stored on nodes.]] - `rationale_for` [EXTRACTED]
- [[serve()]] - `calls` [EXTRACTED]
- [[serve.py]] - `contains` [EXTRACTED]
- [[test_communities_from_graph_basic()]] - `calls` [INFERRED]
- [[test_communities_from_graph_isolated()]] - `calls` [INFERRED]
- [[test_communities_from_graph_no_community_attr()]] - `calls` [INFERRED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[_communities_from_graph()]]
```

#graphify/code #graphify/INFERRED #community/Community_None