---
source_file: "vendor/graphify/graphify/__main__.py"
type: "code"
community: "Community None"
degree: 7
location: "L641"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# _cursor_install()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 7

## Architecture Graph
```mermaid
graph LR
    center["_cursor_install[]"]:::centerNode
    center -->|"calls"| N_tests_test_install_test_cursor_install_writes_rule["test_cursor_install_writes_rule[]"]
    center -->|"calls"| N_tests_test_install_test_cursor_install_idempotent["test_cursor_install_idempotent[]"]
    center -->|"calls"| N_tests_test_install_test_cursor_uninstall_removes_rule["test_cursor_uninstall_removes_rule[]"]
    center -->|"contains"| N_vendor_graphify_graphify_main_py["__main__.py"]
    center -->|"calls"| N_graphify_main_install["install[]"]
    center -->|"calls"| N_graphify_main_main["main[]"]
    center -->|"rationale_for"| N_graphify_main_rationale_642["Write .cursor/rules/graphify.mdc with alwaysApply: true."]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[Write .cursorrulesgraphify.mdc with alwaysApply true.]] - `rationale_for` [EXTRACTED]
- [[__main__.py]] - `contains` [EXTRACTED]
- [[install()_1]] - `calls` [EXTRACTED]
- [[main()_2]] - `calls` [EXTRACTED]
- [[test_cursor_install_idempotent()]] - `calls` [INFERRED]
- [[test_cursor_install_writes_rule()]] - `calls` [INFERRED]
- [[test_cursor_uninstall_removes_rule()]] - `calls` [INFERRED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[_cursor_install()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None