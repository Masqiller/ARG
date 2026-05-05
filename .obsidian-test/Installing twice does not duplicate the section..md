---
source_file: "vendor/graphify/tests/test_install.py"
type: "rationale"
community: "Community None"
degree: 1
location: "L143"
tags:
  - graphify/rationale
  - graphify/EXTRACTED
  - community/Community_None
---

# Installing twice does not duplicate the section.

> [!info] Properties
> **File Type**: rationale
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 1

## Architecture Graph
```mermaid
graph LR
    center["Installing twice does not duplicate the section."]:::centerNode
    center -->|"rationale_for"| N_tests_test_install_test_agents_install_idempotent["test_agents_install_idempotent[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[test_agents_install_idempotent()]] - `rationale_for` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[Installing twice does not duplicate the section.]]
```

#graphify/rationale #graphify/EXTRACTED #community/Community_None