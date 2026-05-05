---
source_file: "vendor/graphify/tests/test_security.py"
type: "code"
community: "Community None"
degree: 3
location: "L140"
tags:
  - graphify/code
  - graphify/INFERRED
  - community/Community_None
---

# test_validate_graph_path_allows_inside_base()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 3

## Architecture Graph
```mermaid
graph LR
    center["test_validate_graph_path_allows_inside_base[]"]:::centerNode
    center -->|"contains"| N_vendor_graphify_tests_test_security_py["test_security.py"]
    center -->|"calls"| N_graphify_security_validate_graph_path["validate_graph_path[]"]
    center -->|"calls"| N_str["str"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[str]] - `calls` [INFERRED]
- [[test_security.py]] - `contains` [EXTRACTED]
- [[validate_graph_path()]] - `calls` [INFERRED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[test_validate_graph_path_allows_inside_base()]]
```

#graphify/code #graphify/INFERRED #community/Community_None