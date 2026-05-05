---
source_file: "vendor/graphify/tests/test_security.py"
type: "code"
community: "Community None"
degree: 2
location: "L90"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# test_safe_fetch_raises_on_size_exceeded()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 2

## Architecture Graph
```mermaid
graph LR
    center["test_safe_fetch_raises_on_size_exceeded[]"]:::centerNode
    center -->|"contains"| N_vendor_graphify_tests_test_security_py["test_security.py"]
    center -->|"calls"| N_graphify_security_safe_fetch["safe_fetch[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[safe_fetch()]] - `calls` [INFERRED]
- [[test_security.py]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[test_safe_fetch_raises_on_size_exceeded()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None