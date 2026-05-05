---
source_file: "vendor/graphify/tests/test_languages.py"
type: "code"
community: "Community None"
degree: 3
location: "L633"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# test_go_receiver_methods_share_type_node()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 3

## Architecture Graph
```mermaid
graph LR
    center["test_go_receiver_methods_share_type_node[]"]:::centerNode
    center -->|"contains"| N_vendor_graphify_tests_test_languages_py["test_languages.py"]
    center -->|"rationale_for"| N_tests_test_languages_rationale_634["Methods on the same receiver type must share one canonical type node."]
    center -->|"calls"| N_graphify_extract_extract_go["extract_go[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[Methods on the same receiver type must share one canonical type node.]] - `rationale_for` [EXTRACTED]
- [[extract_go()]] - `calls` [INFERRED]
- [[test_languages.py]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[test_go_receiver_methods_share_type_node()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None