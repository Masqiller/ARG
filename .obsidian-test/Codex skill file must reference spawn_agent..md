---
source_file: "vendor/graphify/tests/test_install.py"
type: "rationale"
community: "Community None"
degree: 1
location: "L71"
tags:
  - graphify/rationale
  - graphify/EXTRACTED
  - community/Community_None
---

# Codex skill file must reference spawn_agent.

> [!info] Properties
> **File Type**: rationale
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 1

## Architecture Graph
```mermaid
graph LR
    center["Codex skill file must reference spawn_agent."]:::centerNode
    center -->|"rationale_for"| N_tests_test_install_test_codex_skill_contains_spawn_agent["test_codex_skill_contains_spawn_agent[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[test_codex_skill_contains_spawn_agent()]] - `rationale_for` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[Codex skill file must reference spawn_agent.]]
```

#graphify/rationale #graphify/EXTRACTED #community/Community_None