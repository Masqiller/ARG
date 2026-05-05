---
source_file: "vendor/graphify/graphify/cluster.py"
type: "code"
community: "Community None"
degree: 3
location: "L10"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# _suppress_output()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 3

## Architecture Graph
```mermaid
graph LR
    center["_suppress_output[]"]:::centerNode
    center -->|"contains"| N_vendor_graphify_graphify_cluster_py["cluster.py"]
    center -->|"calls"| N_graphify_cluster_partition["_partition[]"]
    center -->|"rationale_for"| N_graphify_cluster_rationale_11["Context manager to suppress stdout/stderr during library calls.      graspologic"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[Context manager to suppress stdoutstderr during library calls.      graspologic]] - `rationale_for` [EXTRACTED]
- [[_partition()]] - `calls` [EXTRACTED]
- [[cluster.py]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[_suppress_output()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None