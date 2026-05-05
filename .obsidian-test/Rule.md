---
source_file: "vendor/external_plugins/claude-code/plugins/hookify/core/config_loader.py"
type: "code"
community: "Community None"
degree: 2
location: "L33"
tags:
  - graphify/code
  - graphify/INFERRED
  - community/Community_None
---

# Rule

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 2

## Architecture Graph
```mermaid
graph LR
    center["Rule"]:::centerNode
    center -->|"uses"| N_core_rule_engine_ruleengine["RuleEngine"]
    center -->|"contains"| N_vendor_external_plugins_claude_code_plugins_hookify_core_config_loader_py["config_loader.py"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[RuleEngine]] - `uses` [INFERRED]
- [[config_loader.py]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[Rule]]
```

#graphify/code #graphify/INFERRED #community/Community_None