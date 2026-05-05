---
source_file: "vendor/external_plugins/claude-code/plugins/hookify/core/config_loader.py"
type: "rationale"
community: "Community None"
degree: 1
location: "L245"
tags:
  - graphify/rationale
  - graphify/EXTRACTED
  - community/Community_None
---

# Load a single rule file.      Returns:         Rule object or None if file is in

> [!info] Properties
> **File Type**: rationale
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 1

## Architecture Graph
```mermaid
graph LR
    center["Load a single rule file.      Returns:         Rule object or None if file is in"]:::centerNode
    center -->|"rationale_for"| N_core_config_loader_load_rule_file["load_rule_file[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[load_rule_file()]] - `rationale_for` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[Load a single rule file.      Returns         Rule object or None if file is in]]
```

#graphify/rationale #graphify/EXTRACTED #community/Community_None