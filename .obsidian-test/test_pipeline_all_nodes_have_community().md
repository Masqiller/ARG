---
source_file: "vendor/graphify/tests/test_pipeline.py"
type: "code"
community: "Community None"
degree: 2
location: "L117"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# test_pipeline_all_nodes_have_community()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 2

## Architecture Graph
```mermaid
graph LR
    center["test_pipeline_all_nodes_have_community[]"]:::centerNode
    center -->|"contains"| N_vendor_graphify_tests_test_pipeline_py["test_pipeline.py"]
    center -->|"calls"| N_tests_test_pipeline_run_pipeline["run_pipeline[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[run_pipeline()]] - `calls` [EXTRACTED]
- [[test_pipeline.py]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[test_pipeline_all_nodes_have_community()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None