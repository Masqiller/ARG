---
source_file: "vendor/graphify/tests/test_detect.py"
type: "code"
community: "Community None"
degree: 2
location: "L131"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# test_detect_follows_symlinked_file()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 2

## Architecture Graph
```mermaid
graph LR
    center["test_detect_follows_symlinked_file[]"]:::centerNode
    center -->|"contains"| N_vendor_graphify_tests_test_detect_py["test_detect.py"]
    center -->|"calls"| N_graphify_detect_detect["detect[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[detect()]] - `calls` [INFERRED]
- [[test_detect.py]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[test_detect_follows_symlinked_file()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None