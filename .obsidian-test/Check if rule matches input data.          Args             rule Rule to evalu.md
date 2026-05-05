---
source_file: "vendor/external_plugins/claude-code/plugins/hookify/core/rule_engine.py"
type: "rationale"
community: "Community None"
degree: 1
location: "L97"
tags:
  - graphify/rationale
  - graphify/EXTRACTED
  - community/Community_None
---

# Check if rule matches input data.          Args:             rule: Rule to evalu

> [!info] Properties
> **File Type**: rationale
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 1

## Architecture Graph
```mermaid
graph LR
    center["Check if rule matches input data.          Args:             rule: Rule to evalu"]:::centerNode
    center -->|"rationale_for"| N_core_rule_engine_ruleengine_rule_matches["._rule_matches[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[._rule_matches()]] - `rationale_for` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[Check if rule matches input data.          Args             rule Rule to evalu]]
```

#graphify/rationale #graphify/EXTRACTED #community/Community_None