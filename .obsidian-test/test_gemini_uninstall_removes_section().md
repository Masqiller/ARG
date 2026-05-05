---
source_file: "vendor/graphify/tests/test_install.py"
type: "code"
community: "Community None"
degree: 3
location: "L301"
tags:
  - graphify/code
  - graphify/INFERRED
  - community/Community_None
---

# test_gemini_uninstall_removes_section()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 3

## Architecture Graph
```mermaid
graph LR
    center["test_gemini_uninstall_removes_section[]"]:::centerNode
    center -->|"contains"| N_vendor_graphify_tests_test_install_py["test_install.py"]
    center -->|"calls"| N_graphify_main_gemini_install["gemini_install[]"]
    center -->|"calls"| N_graphify_main_gemini_uninstall["gemini_uninstall[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[gemini_install()]] - `calls` [INFERRED]
- [[gemini_uninstall()]] - `calls` [INFERRED]
- [[test_install.py]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[test_gemini_uninstall_removes_section()]]
```

#graphify/code #graphify/INFERRED #community/Community_None