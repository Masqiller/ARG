---
source_file: "vendor/graphify/tests/test_build.py"
type: "code"
community: "Community None"
degree: 2
location: "L18"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# test_nodes_have_label()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 2

## Architecture Graph
```mermaid
graph LR
    center["test_nodes_have_label[]"]:::centerNode
    center -->|"contains"| N_vendor_graphify_tests_test_build_py["test_build.py"]
    center -->|"calls"| N_tests_test_build_load_extraction["load_extraction[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[load_extraction()]] - `calls` [EXTRACTED]
- [[test_build.py]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[test_nodes_have_label()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None