---
source_file: "vendor/graphify/tests/test_security.py"
type: "code"
community: "Community None"
degree: 2
location: "L177"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# test_sanitize_label_strips_control_chars()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 2

## Architecture Graph
```mermaid
graph LR
    center["test_sanitize_label_strips_control_chars[]"]:::centerNode
    center -->|"contains"| N_vendor_graphify_tests_test_security_py["test_security.py"]
    center -->|"calls"| N_graphify_security_sanitize_label["sanitize_label[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[sanitize_label()]] - `calls` [INFERRED]
- [[test_security.py]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[test_sanitize_label_strips_control_chars()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None