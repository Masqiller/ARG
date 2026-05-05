---
source_file: "vendor/graphify/tests/test_hooks.py"
type: "code"
community: "Community None"
degree: 3
location: "L54"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# test_uninstall_removes_hook()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 3

## Architecture Graph
```mermaid
graph LR
    center["test_uninstall_removes_hook[]"]:::centerNode
    center -->|"contains"| N_vendor_graphify_tests_test_hooks_py["test_hooks.py"]
    center -->|"calls"| N_tests_test_hooks_make_git_repo["_make_git_repo[]"]
    center -->|"calls"| N_graphify_hooks_uninstall["uninstall[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[_make_git_repo()]] - `calls` [EXTRACTED]
- [[test_hooks.py]] - `contains` [EXTRACTED]
- [[uninstall()]] - `calls` [INFERRED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[test_uninstall_removes_hook()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None