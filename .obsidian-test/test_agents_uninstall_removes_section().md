---
source_file: "vendor/graphify/tests/test_install.py"
type: "code"
community: "Community None"
degree: 3
location: "L160"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# test_agents_uninstall_removes_section()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 3

## Architecture Graph
```mermaid
graph LR
    center["test_agents_uninstall_removes_section[]"]:::centerNode
    center -->|"contains"| N_vendor_graphify_tests_test_install_py["test_install.py"]
    center -->|"calls"| N_tests_test_install_agents_install["_agents_install[]"]
    center -->|"calls"| N_tests_test_install_agents_uninstall["_agents_uninstall[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[_agents_install()]] - `calls` [EXTRACTED]
- [[_agents_uninstall()]] - `calls` [EXTRACTED]
- [[test_install.py]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[test_agents_uninstall_removes_section()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None