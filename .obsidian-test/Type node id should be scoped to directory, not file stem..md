---
source_file: "vendor/graphify/tests/test_languages.py"
type: "rationale"
community: "Community None"
degree: 1
location: "L641"
tags:
  - graphify/rationale
  - graphify/EXTRACTED
  - community/Community_None
---

# Type node id should be scoped to directory, not file stem.

> [!info] Properties
> **File Type**: rationale
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 1

## Architecture Graph
```mermaid
graph LR
    center["Type node id should be scoped to directory, not file stem."]:::centerNode
    center -->|"rationale_for"| N_tests_test_languages_test_go_receiver_uses_pkg_scope["test_go_receiver_uses_pkg_scope[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[test_go_receiver_uses_pkg_scope()]] - `rationale_for` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[Type node id should be scoped to directory, not file stem.]]
```

#graphify/rationale #graphify/EXTRACTED #community/Community_None