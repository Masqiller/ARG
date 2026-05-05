---
source_file: "vendor/external_plugins/claude-code/plugins/hookify/core/rule_engine.py"
type: "rationale"
community: "Community None"
degree: 1
location: "L28"
tags:
  - graphify/rationale
  - graphify/EXTRACTED
  - community/Community_None
---

# Evaluates rules against hook input data.

> [!info] Properties
> **File Type**: rationale
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 1

## Architecture Graph
```mermaid
graph LR
    center["Evaluates rules against hook input data."]:::centerNode
    center -->|"rationale_for"| N_core_rule_engine_ruleengine["RuleEngine"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[RuleEngine]] - `rationale_for` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[Evaluates rules against hook input data.]]
```

#graphify/rationale #graphify/EXTRACTED #community/Community_None