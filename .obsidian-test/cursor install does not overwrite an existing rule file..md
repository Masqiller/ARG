---
source_file: "vendor/graphify/tests/test_install.py"
type: "rationale"
community: "Community None"
degree: 1
location: "L245"
tags:
  - graphify/rationale
  - graphify/EXTRACTED
  - community/Community_None
---

# cursor install does not overwrite an existing rule file.

> [!info] Properties
> **File Type**: rationale
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 1

## Architecture Graph
```mermaid
graph LR
    center["cursor install does not overwrite an existing rule file."]:::centerNode
    center -->|"rationale_for"| N_tests_test_install_test_cursor_install_idempotent["test_cursor_install_idempotent[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[test_cursor_install_idempotent()]] - `rationale_for` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[cursor install does not overwrite an existing rule file.]]
```

#graphify/rationale #graphify/EXTRACTED #community/Community_None