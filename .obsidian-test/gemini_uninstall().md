---
source_file: "vendor/graphify/graphify/__main__.py"
type: "code"
community: "Community None"
degree: 7
location: "L336"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# gemini_uninstall()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 7

## Architecture Graph
```mermaid
graph LR
    center["gemini_uninstall[]"]:::centerNode
    center -->|"calls"| N_tests_test_install_test_gemini_uninstall_removes_section["test_gemini_uninstall_removes_section[]"]
    center -->|"calls"| N_tests_test_install_test_gemini_uninstall_removes_hook["test_gemini_uninstall_removes_hook[]"]
    center -->|"calls"| N_tests_test_install_test_gemini_uninstall_noop_if_not_installed["test_gemini_uninstall_noop_if_not_installed[]"]
    center -->|"contains"| N_vendor_graphify_graphify_main_py["__main__.py"]
    center -->|"calls"| N_graphify_main_uninstall_gemini_hook["_uninstall_gemini_hook[]"]
    center -->|"calls"| N_graphify_main_main["main[]"]
    center -->|"rationale_for"| N_graphify_main_rationale_337["Remove the graphify section from GEMINI.md, uninstall hook, and remove skill fil"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[Remove the graphify section from GEMINI.md, uninstall hook, and remove skill fil]] - `rationale_for` [EXTRACTED]
- [[__main__.py]] - `contains` [EXTRACTED]
- [[_uninstall_gemini_hook()]] - `calls` [EXTRACTED]
- [[main()_2]] - `calls` [EXTRACTED]
- [[test_gemini_uninstall_noop_if_not_installed()]] - `calls` [INFERRED]
- [[test_gemini_uninstall_removes_hook()]] - `calls` [INFERRED]
- [[test_gemini_uninstall_removes_section()]] - `calls` [INFERRED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[gemini_uninstall()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None