---
source_file: "vendor/graphify/tests/test_languages.py"
type: "rationale"
community: "Community None"
degree: 1
location: "L634"
tags:
  - graphify/rationale
  - graphify/EXTRACTED
  - community/Community_None
---

# Methods on the same receiver type must share one canonical type node.

> [!info] Properties
> **File Type**: rationale
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 1

## Architecture Graph
```mermaid
graph LR
    center["Methods on the same receiver type must share one canonical type node."]:::centerNode
    center -->|"rationale_for"| N_tests_test_languages_test_go_receiver_methods_share_type_node["test_go_receiver_methods_share_type_node[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[test_go_receiver_methods_share_type_node()]] - `rationale_for` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[Methods on the same receiver type must share one canonical type node.]]
```

#graphify/rationale #graphify/EXTRACTED #community/Community_None