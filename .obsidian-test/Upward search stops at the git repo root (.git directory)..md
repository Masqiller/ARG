---
source_file: "vendor/graphify/tests/test_detect.py"
type: "rationale"
community: "Community None"
degree: 1
location: "L178"
tags:
  - graphify/rationale
  - graphify/EXTRACTED
  - community/Community_None
---

# Upward search stops at the git repo root (.git directory).

> [!info] Properties
> **File Type**: rationale
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 1

## Architecture Graph
```mermaid
graph LR
    center["Upward search stops at the git repo root [.git directory]."]:::centerNode
    center -->|"rationale_for"| N_tests_test_detect_test_graphifyignore_stops_at_git_boundary["test_graphifyignore_stops_at_git_boundary[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[test_graphifyignore_stops_at_git_boundary()]] - `rationale_for` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[Upward search stops at the git repo root (.git directory).]]
```

#graphify/rationale #graphify/EXTRACTED #community/Community_None