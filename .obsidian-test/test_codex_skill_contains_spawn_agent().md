---
source_file: "vendor/graphify/tests/test_install.py"
type: "code"
community: "Community None"
degree: 2
location: "L70"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# test_codex_skill_contains_spawn_agent()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 2

## Architecture Graph
```mermaid
graph LR
    center["test_codex_skill_contains_spawn_agent[]"]:::centerNode
    center -->|"contains"| N_vendor_graphify_tests_test_install_py["test_install.py"]
    center -->|"rationale_for"| N_tests_test_install_rationale_71["Codex skill file must reference spawn_agent."]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[Codex skill file must reference spawn_agent.]] - `rationale_for` [EXTRACTED]
- [[test_install.py]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[test_codex_skill_contains_spawn_agent()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None