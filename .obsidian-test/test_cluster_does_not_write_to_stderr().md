---
source_file: "vendor/graphify/tests/test_cluster.py"
type: "code"
community: "Community None"
degree: 3
location: "L69"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# test_cluster_does_not_write_to_stderr()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 3

## Architecture Graph
```mermaid
graph LR
    center["test_cluster_does_not_write_to_stderr[]"]:::centerNode
    center -->|"contains"| N_vendor_graphify_tests_test_cluster_py["test_cluster.py"]
    center -->|"calls"| N_tests_test_cluster_make_graph["make_graph[]"]
    center -->|"rationale_for"| N_tests_test_cluster_rationale_70["Same as above but for stderr — ANSI codes can go to either stream."]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[Same as above but for stderr — ANSI codes can go to either stream.]] - `rationale_for` [EXTRACTED]
- [[make_graph()_1]] - `calls` [EXTRACTED]
- [[test_cluster.py]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[test_cluster_does_not_write_to_stderr()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None