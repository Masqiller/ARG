---
source_file: "vendor/external_plugins/claude-code/plugins/hookify/hooks/stop.py"
type: "code"
community: "Community None"
degree: 5
location: "L30"
tags:
  - graphify/code
  - graphify/INFERRED
  - community/Community_None
---

# main()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 5

## Architecture Graph
```mermaid
graph LR
    center["main[]"]:::centerNode
    center -->|"calls"| N_str["str"]
    center -->|"calls"| N_core_rule_engine_ruleengine["RuleEngine"]
    center -->|"calls"| N_core_config_loader_load_rules["load_rules[]"]
    center -->|"contains"| N_vendor_external_plugins_claude_code_plugins_hookify_hooks_stop_py["stop.py"]
    center -->|"rationale_for"| N_hooks_stop_rationale_31["Main entry point for Stop hook."]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[Main entry point for Stop hook.]] - `rationale_for` [EXTRACTED]
- [[RuleEngine]] - `calls` [INFERRED]
- [[load_rules()]] - `calls` [INFERRED]
- [[stop.py]] - `contains` [EXTRACTED]
- [[str]] - `calls` [INFERRED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[main()_6]]
```

#graphify/code #graphify/INFERRED #community/Community_None