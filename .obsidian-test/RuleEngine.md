---
source_file: "vendor/external_plugins/claude-code/plugins/hookify/core/rule_engine.py"
type: "code"
community: "Community None"
degree: 15
location: "L27"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# RuleEngine

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 15

## Architecture Graph
```mermaid
graph LR
    center["RuleEngine"]:::centerNode
    center -->|"contains"| N_vendor_external_plugins_claude_code_plugins_hookify_core_rule_engine_py["rule_engine.py"]
    center -->|"method"| N_core_rule_engine_ruleengine_init[".__init__[]"]
    center -->|"method"| N_core_rule_engine_ruleengine_evaluate_rules[".evaluate_rules[]"]
    center -->|"method"| N_core_rule_engine_ruleengine_rule_matches["._rule_matches[]"]
    center -->|"method"| N_core_rule_engine_ruleengine_matches_tool["._matches_tool[]"]
    center -->|"method"| N_core_rule_engine_ruleengine_check_condition["._check_condition[]"]
    center -->|"method"| N_core_rule_engine_ruleengine_extract_field["._extract_field[]"]
    center -->|"method"| N_core_rule_engine_ruleengine_regex_match["._regex_match[]"]
    center -->|"rationale_for"| N_core_rule_engine_rationale_28["Evaluates rules against hook input data."]
    center -->|"uses"| N_core_config_loader_rule["Rule"]
    center -->|"uses"| N_core_config_loader_condition["Condition"]
    center -->|"calls"| N_hooks_pretooluse_main["main[]"]
    center -->|"calls"| N_hooks_userpromptsubmit_main["main[]"]
    center -->|"calls"| N_hooks_stop_main["main[]"]
    center -->|"calls"| N_hooks_posttooluse_main["main[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[.__init__()_22]] - `method` [EXTRACTED]
- [[._check_condition()]] - `method` [EXTRACTED]
- [[._extract_field()]] - `method` [EXTRACTED]
- [[._matches_tool()]] - `method` [EXTRACTED]
- [[._regex_match()]] - `method` [EXTRACTED]
- [[._rule_matches()]] - `method` [EXTRACTED]
- [[.evaluate_rules()]] - `method` [EXTRACTED]
- [[Condition]] - `uses` [INFERRED]
- [[Evaluates rules against hook input data.]] - `rationale_for` [EXTRACTED]
- [[Rule]] - `uses` [INFERRED]
- [[main()_4]] - `calls` [INFERRED]
- [[main()_5]] - `calls` [INFERRED]
- [[main()_6]] - `calls` [INFERRED]
- [[main()_7]] - `calls` [INFERRED]
- [[rule_engine.py]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[RuleEngine]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None