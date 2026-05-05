---
source_file: "vendor/graphify/graphify/benchmark.py"
type: "code"
community: "Community None"
degree: 5
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# benchmark.py

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 5

## Architecture Graph
```mermaid
graph LR
    center["benchmark.py"]:::centerNode
    center -->|"contains"| N_graphify_benchmark_estimate_tokens["_estimate_tokens[]"]
    center -->|"contains"| N_graphify_benchmark_query_subgraph_tokens["_query_subgraph_tokens[]"]
    center -->|"contains"| N_graphify_benchmark_run_benchmark["run_benchmark[]"]
    center -->|"contains"| N_graphify_benchmark_print_benchmark["print_benchmark[]"]
    center -->|"rationale_for"| N_graphify_benchmark_rationale_1["Token-reduction benchmark - measures how much context graphify saves vs naive fu"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[Token-reduction benchmark - measures how much context graphify saves vs naive fu]] - `rationale_for` [EXTRACTED]
- [[_estimate_tokens()]] - `contains` [EXTRACTED]
- [[_query_subgraph_tokens()]] - `contains` [EXTRACTED]
- [[print_benchmark()]] - `contains` [EXTRACTED]
- [[run_benchmark()]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[benchmark.py]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None