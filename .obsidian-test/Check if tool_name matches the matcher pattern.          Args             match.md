---
source_file: "vendor/external_plugins/claude-code/plugins/hookify/core/rule_engine.py"
type: "rationale"
community: "Community None"
degree: 1
location: "L128"
tags:
  - graphify/rationale
  - graphify/EXTRACTED
  - community/Community_None
---

# Check if tool_name matches the matcher pattern.          Args:             match

> [!info] Properties
> **File Type**: rationale
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 1

## Architecture Graph
```mermaid
graph LR
    center["Check if tool_name matches the matcher pattern.          Args:             match"]:::centerNode
    center -->|"rationale_for"| N_core_rule_engine_ruleengine_matches_tool["._matches_tool[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[._matches_tool()]] - `rationale_for` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[Check if tool_name matches the matcher pattern.          Args             match]]
```

#graphify/rationale #graphify/EXTRACTED #community/Community_None