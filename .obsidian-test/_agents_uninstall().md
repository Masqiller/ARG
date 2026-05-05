---
source_file: "vendor/graphify/tests/test_install.py"
type: "code"
community: "Community None"
degree: 5
location: "L119"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# _agents_uninstall()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 5

## Architecture Graph
```mermaid
graph LR
    center["_agents_uninstall[]"]:::centerNode
    center -->|"contains"| N_vendor_graphify_tests_test_install_py["test_install.py"]
    center -->|"calls"| N_tests_test_install_test_agents_uninstall_removes_section["test_agents_uninstall_removes_section[]"]
    center -->|"calls"| N_tests_test_install_test_agents_uninstall_preserves_other_content["test_agents_uninstall_preserves_other_content[]"]
    center -->|"calls"| N_tests_test_install_test_agents_uninstall_no_op_when_not_installed["test_agents_uninstall_no_op_when_not_installed[]"]
    center -->|"calls"| N_tests_test_install_test_opencode_agents_uninstall_removes_plugin["test_opencode_agents_uninstall_removes_plugin[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[test_agents_uninstall_no_op_when_not_installed()]] - `calls` [EXTRACTED]
- [[test_agents_uninstall_preserves_other_content()]] - `calls` [EXTRACTED]
- [[test_agents_uninstall_removes_section()]] - `calls` [EXTRACTED]
- [[test_install.py]] - `contains` [EXTRACTED]
- [[test_opencode_agents_uninstall_removes_plugin()]] - `calls` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[_agents_uninstall()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None