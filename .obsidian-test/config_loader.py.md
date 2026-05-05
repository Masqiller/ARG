---
source_file: "vendor/external_plugins/claude-code/plugins/hookify/core/config_loader.py"
type: "code"
community: "Community None"
degree: 6
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# config_loader.py

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 6

## Architecture Graph
```mermaid
graph LR
    center["config_loader.py"]:::centerNode
    center -->|"contains"| N_core_config_loader_condition["Condition"]
    center -->|"contains"| N_core_config_loader_from_dict["from_dict[]"]
    center -->|"contains"| N_core_config_loader_rule["Rule"]
    center -->|"contains"| N_core_config_loader_extract_frontmatter["extract_frontmatter[]"]
    center -->|"contains"| N_core_config_loader_load_rules["load_rules[]"]
    center -->|"contains"| N_core_config_loader_load_rule_file["load_rule_file[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[Condition]] - `contains` [EXTRACTED]
- [[Rule]] - `contains` [EXTRACTED]
- [[extract_frontmatter()]] - `contains` [EXTRACTED]
- [[from_dict()]] - `contains` [EXTRACTED]
- [[load_rule_file()]] - `contains` [EXTRACTED]
- [[load_rules()]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[config_loader.py]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None