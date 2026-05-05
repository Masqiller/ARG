---
source_file: "vendor/graphify/tests/test_install.py"
type: "code"
community: "Community None"
degree: 3
location: "L150"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# test_agents_install_appends_to_existing()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 3

## Architecture Graph
```mermaid
graph LR
    center["test_agents_install_appends_to_existing[]"]:::centerNode
    center -->|"contains"| N_vendor_graphify_tests_test_install_py["test_install.py"]
    center -->|"calls"| N_tests_test_install_agents_install["_agents_install[]"]
    center -->|"rationale_for"| N_tests_test_install_rationale_151["Installs into an existing AGENTS.md without overwriting other content."]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[Installs into an existing AGENTS.md without overwriting other content.]] - `rationale_for` [EXTRACTED]
- [[_agents_install()]] - `calls` [EXTRACTED]
- [[test_install.py]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[test_agents_install_appends_to_existing()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None