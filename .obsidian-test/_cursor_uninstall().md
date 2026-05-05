---
source_file: "vendor/graphify/graphify/__main__.py"
type: "code"
community: "Community None"
degree: 5
location: "L655"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# _cursor_uninstall()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 5

## Architecture Graph
```mermaid
graph LR
    center["_cursor_uninstall[]"]:::centerNode
    center -->|"calls"| N_tests_test_install_test_cursor_uninstall_removes_rule["test_cursor_uninstall_removes_rule[]"]
    center -->|"calls"| N_tests_test_install_test_cursor_uninstall_noop_if_not_installed["test_cursor_uninstall_noop_if_not_installed[]"]
    center -->|"contains"| N_vendor_graphify_graphify_main_py["__main__.py"]
    center -->|"calls"| N_graphify_main_main["main[]"]
    center -->|"rationale_for"| N_graphify_main_rationale_656["Remove .cursor/rules/graphify.mdc."]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[Remove .cursorrulesgraphify.mdc.]] - `rationale_for` [EXTRACTED]
- [[__main__.py]] - `contains` [EXTRACTED]
- [[main()_2]] - `calls` [EXTRACTED]
- [[test_cursor_uninstall_noop_if_not_installed()]] - `calls` [INFERRED]
- [[test_cursor_uninstall_removes_rule()]] - `calls` [INFERRED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[_cursor_uninstall()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None