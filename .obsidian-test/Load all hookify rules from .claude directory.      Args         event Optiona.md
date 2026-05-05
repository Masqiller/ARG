---
source_file: "vendor/external_plugins/claude-code/plugins/hookify/core/config_loader.py"
type: "rationale"
community: "Community None"
degree: 1
location: "L199"
tags:
  - graphify/rationale
  - graphify/EXTRACTED
  - community/Community_None
---

# Load all hookify rules from .claude directory.      Args:         event: Optiona

> [!info] Properties
> **File Type**: rationale
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 1

## Architecture Graph
```mermaid
graph LR
    center["Load all hookify rules from .claude directory.      Args:         event: Optiona"]:::centerNode
    center -->|"rationale_for"| N_core_config_loader_load_rules["load_rules[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[load_rules()]] - `rationale_for` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[Load all hookify rules from .claude directory.      Args         event Optiona]]
```

#graphify/rationale #graphify/EXTRACTED #community/Community_None