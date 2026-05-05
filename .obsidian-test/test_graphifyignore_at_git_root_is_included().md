---
source_file: "vendor/graphify/tests/test_detect.py"
type: "code"
community: "Community None"
degree: 3
location: "L193"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# test_graphifyignore_at_git_root_is_included()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 3

## Architecture Graph
```mermaid
graph LR
    center["test_graphifyignore_at_git_root_is_included[]"]:::centerNode
    center -->|"contains"| N_vendor_graphify_tests_test_detect_py["test_detect.py"]
    center -->|"rationale_for"| N_tests_test_detect_rationale_194["A .graphifyignore at the git repo root is included when scanning a subdir."]
    center -->|"calls"| N_graphify_detect_detect["detect[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[A .graphifyignore at the git repo root is included when scanning a subdir.]] - `rationale_for` [EXTRACTED]
- [[detect()]] - `calls` [INFERRED]
- [[test_detect.py]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[test_graphifyignore_at_git_root_is_included()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None