---
source_file: "vendor/graphify/tests/test_install.py"
type: "rationale"
community: "Community None"
degree: 1
location: "L169"
tags:
  - graphify/rationale
  - graphify/EXTRACTED
  - community/Community_None
---

# Uninstall keeps pre-existing content.

> [!info] Properties
> **File Type**: rationale
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 1

## Architecture Graph
```mermaid
graph LR
    center["Uninstall keeps pre-existing content."]:::centerNode
    center -->|"rationale_for"| N_tests_test_install_test_agents_uninstall_preserves_other_content["test_agents_uninstall_preserves_other_content[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[test_agents_uninstall_preserves_other_content()]] - `rationale_for` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[Uninstall keeps pre-existing content.]]
```

#graphify/rationale #graphify/EXTRACTED #community/Community_None