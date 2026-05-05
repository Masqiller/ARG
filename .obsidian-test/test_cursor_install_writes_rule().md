---
source_file: "vendor/graphify/tests/test_install.py"
type: "code"
community: "Community None"
degree: 3
location: "L233"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# test_cursor_install_writes_rule()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 3

## Architecture Graph
```mermaid
graph LR
    center["test_cursor_install_writes_rule[]"]:::centerNode
    center -->|"contains"| N_vendor_graphify_tests_test_install_py["test_install.py"]
    center -->|"rationale_for"| N_tests_test_install_rationale_234["cursor install writes .cursor/rules/graphify.mdc."]
    center -->|"calls"| N_graphify_main_cursor_install["_cursor_install[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[_cursor_install()]] - `calls` [INFERRED]
- [[cursor install writes .cursorrulesgraphify.mdc.]] - `rationale_for` [EXTRACTED]
- [[test_install.py]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[test_cursor_install_writes_rule()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None