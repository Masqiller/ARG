---
source_file: "vendor/external_plugins/claude-code/plugins/hookify/core/config_loader.py"
type: "code"
community: "Community None"
degree: 3
location: "L23"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# from_dict()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 3

## Architecture Graph
```mermaid
graph LR
    center["from_dict[]"]:::centerNode
    center -->|"contains"| N_vendor_external_plugins_claude_code_plugins_hookify_core_config_loader_py["config_loader.py"]
    center -->|"calls"| N_core_config_loader_condition["Condition"]
    center -->|"calls"| N_core_config_loader_load_rule_file["load_rule_file[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[Condition]] - `calls` [EXTRACTED]
- [[config_loader.py]] - `contains` [EXTRACTED]
- [[load_rule_file()]] - `calls` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[from_dict()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None