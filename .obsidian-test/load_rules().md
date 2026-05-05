---
source_file: "vendor/external_plugins/claude-code/plugins/hookify/core/config_loader.py"
type: "code"
community: "Community None"
degree: 7
location: "L198"
tags:
  - graphify/code
  - graphify/INFERRED
  - community/Community_None
---

# load_rules()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 7

## Architecture Graph
```mermaid
graph LR
    center["load_rules[]"]:::centerNode
    center -->|"contains"| N_vendor_external_plugins_claude_code_plugins_hookify_core_config_loader_py["config_loader.py"]
    center -->|"calls"| N_core_config_loader_load_rule_file["load_rule_file[]"]
    center -->|"rationale_for"| N_core_config_loader_rationale_199["Load all hookify rules from .claude directory.      Args:         event: Optiona"]
    center -->|"calls"| N_hooks_pretooluse_main["main[]"]
    center -->|"calls"| N_hooks_userpromptsubmit_main["main[]"]
    center -->|"calls"| N_hooks_stop_main["main[]"]
    center -->|"calls"| N_hooks_posttooluse_main["main[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[Load all hookify rules from .claude directory.      Args         event Optiona]] - `rationale_for` [EXTRACTED]
- [[config_loader.py]] - `contains` [EXTRACTED]
- [[load_rule_file()]] - `calls` [EXTRACTED]
- [[main()_4]] - `calls` [INFERRED]
- [[main()_5]] - `calls` [INFERRED]
- [[main()_6]] - `calls` [INFERRED]
- [[main()_7]] - `calls` [INFERRED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[load_rules()]]
```

#graphify/code #graphify/INFERRED #community/Community_None