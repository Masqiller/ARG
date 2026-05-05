---
source_file: "vendor/graphify/graphify/benchmark.py"
type: "code"
community: "Community None"
degree: 2
location: "L12"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# _estimate_tokens()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 2

## Architecture Graph
```mermaid
graph LR
    center["_estimate_tokens[]"]:::centerNode
    center -->|"contains"| N_vendor_graphify_graphify_benchmark_py["benchmark.py"]
    center -->|"calls"| N_graphify_benchmark_query_subgraph_tokens["_query_subgraph_tokens[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[_query_subgraph_tokens()]] - `calls` [EXTRACTED]
- [[benchmark.py]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[_estimate_tokens()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None