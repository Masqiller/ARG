---
source_file: "vendor/graphify/tests/test_dedup.py"
type: "code"
community: "Community None"
degree: 2
location: "L12"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# test_entropy_normal_label_high()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 2

## Architecture Graph
```mermaid
graph LR
    center["test_entropy_normal_label_high[]"]:::centerNode
    center -->|"contains"| N_vendor_graphify_tests_test_dedup_py["test_dedup.py"]
    center -->|"calls"| N_graphify_dedup_entropy["_entropy[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[_entropy()]] - `calls` [INFERRED]
- [[test_dedup.py]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[test_entropy_normal_label_high()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None