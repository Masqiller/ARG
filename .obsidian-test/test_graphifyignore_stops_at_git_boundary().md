---
source_file: "vendor/graphify/tests/test_detect.py"
type: "code"
community: "Community None"
degree: 3
location: "L177"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# test_graphifyignore_stops_at_git_boundary()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 3

## Architecture Graph
```mermaid
graph LR
    center["test_graphifyignore_stops_at_git_boundary[]"]:::centerNode
    center -->|"contains"| N_vendor_graphify_tests_test_detect_py["test_detect.py"]
    center -->|"rationale_for"| N_tests_test_detect_rationale_178["Upward search stops at the git repo root [.git directory]."]
    center -->|"calls"| N_graphify_detect_detect["detect[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[Upward search stops at the git repo root (.git directory).]] - `rationale_for` [EXTRACTED]
- [[detect()]] - `calls` [INFERRED]
- [[test_detect.py]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[test_graphifyignore_stops_at_git_boundary()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None