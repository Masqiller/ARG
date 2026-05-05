---
source_file: "vendor/external_plugins/claude-code/plugins/hookify/core/config_loader.py"
type: "code"
community: "Community None"
degree: 4
location: "L16"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# Condition

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 4

## Architecture Graph
```mermaid
graph LR
    center["Condition"]:::centerNode
    center -->|"uses"| N_core_rule_engine_ruleengine["RuleEngine"]
    center -->|"contains"| N_vendor_external_plugins_claude_code_plugins_hookify_core_config_loader_py["config_loader.py"]
    center -->|"calls"| N_core_config_loader_from_dict["from_dict[]"]
    center -->|"rationale_for"| N_core_config_loader_rationale_17["A single condition for matching."]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[A single condition for matching.]] - `rationale_for` [EXTRACTED]
- [[RuleEngine]] - `uses` [INFERRED]
- [[config_loader.py]] - `contains` [EXTRACTED]
- [[from_dict()]] - `calls` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[Condition]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None