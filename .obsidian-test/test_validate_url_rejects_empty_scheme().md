---
source_file: "vendor/graphify/tests/test_security.py"
type: "code"
community: "Community None"
degree: 2
location: "L44"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# test_validate_url_rejects_empty_scheme()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 2

## Architecture Graph
```mermaid
graph LR
    center["test_validate_url_rejects_empty_scheme[]"]:::centerNode
    center -->|"contains"| N_vendor_graphify_tests_test_security_py["test_security.py"]
    center -->|"calls"| N_graphify_security_validate_url["validate_url[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[test_security.py]] - `contains` [EXTRACTED]
- [[validate_url()]] - `calls` [INFERRED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[test_validate_url_rejects_empty_scheme()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None