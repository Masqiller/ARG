---
source_file: "vendor/graphify/tests/test_cluster.py"
type: "code"
community: "Community None"
degree: 3
location: "L56"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# test_cluster_does_not_write_to_stdout()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 3

## Architecture Graph
```mermaid
graph LR
    center["test_cluster_does_not_write_to_stdout[]"]:::centerNode
    center -->|"contains"| N_vendor_graphify_tests_test_cluster_py["test_cluster.py"]
    center -->|"calls"| N_tests_test_cluster_make_graph["make_graph[]"]
    center -->|"rationale_for"| N_tests_test_cluster_rationale_57["Clustering should not emit ANSI escape codes or other output.      graspologic's"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[Clustering should not emit ANSI escape codes or other output.      graspologic's]] - `rationale_for` [EXTRACTED]
- [[make_graph()_1]] - `calls` [EXTRACTED]
- [[test_cluster.py]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[test_cluster_does_not_write_to_stdout()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None