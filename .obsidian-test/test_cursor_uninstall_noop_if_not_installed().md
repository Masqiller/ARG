---
source_file: "vendor/graphify/tests/test_install.py"
type: "code"
community: "Community None"
degree: 3
location: "L263"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# test_cursor_uninstall_noop_if_not_installed()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 3

## Architecture Graph
```mermaid
graph LR
    center["test_cursor_uninstall_noop_if_not_installed[]"]:::centerNode
    center -->|"contains"| N_vendor_graphify_tests_test_install_py["test_install.py"]
    center -->|"rationale_for"| N_tests_test_install_rationale_264["cursor uninstall does nothing if rule was never written."]
    center -->|"calls"| N_graphify_main_cursor_uninstall["_cursor_uninstall[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[_cursor_uninstall()]] - `calls` [INFERRED]
- [[cursor uninstall does nothing if rule was never written.]] - `rationale_for` [EXTRACTED]
- [[test_install.py]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[test_cursor_uninstall_noop_if_not_installed()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None