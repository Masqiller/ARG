---
source_file: "vendor/external_plugins/claude-code/plugins/hookify/core/config_loader.py"
type: "code"
community: "Community None"
degree: 5
location: "L244"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# load_rule_file()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 5

## Architecture Graph
```mermaid
graph LR
    center["load_rule_file[]"]:::centerNode
    center -->|"contains"| N_vendor_external_plugins_claude_code_plugins_hookify_core_config_loader_py["config_loader.py"]
    center -->|"calls"| N_core_config_loader_from_dict["from_dict[]"]
    center -->|"calls"| N_core_config_loader_extract_frontmatter["extract_frontmatter[]"]
    center -->|"calls"| N_core_config_loader_load_rules["load_rules[]"]
    center -->|"rationale_for"| N_core_config_loader_rationale_245["Load a single rule file.      Returns:         Rule object or None if file is in"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[Load a single rule file.      Returns         Rule object or None if file is in]] - `rationale_for` [EXTRACTED]
- [[config_loader.py]] - `contains` [EXTRACTED]
- [[extract_frontmatter()]] - `calls` [EXTRACTED]
- [[from_dict()]] - `calls` [EXTRACTED]
- [[load_rules()]] - `calls` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[load_rule_file()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None