---
source_file: "vendor/external_plugins/claude-code/plugins/security-guidance/hooks/security_reminder_hook.py"
type: "rationale"
community: "Community None"
degree: 1
location: "L160"
tags:
  - graphify/rationale
  - graphify/EXTRACTED
  - community/Community_None
---

# Load the state of shown warnings from file.

> [!info] Properties
> **File Type**: rationale
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 1

## Architecture Graph
```mermaid
graph LR
    center["Load the state of shown warnings from file."]:::centerNode
    center -->|"rationale_for"| N_hooks_security_reminder_hook_load_state["load_state[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[load_state()]] - `rationale_for` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[Load the state of shown warnings from file.]]
```

#graphify/rationale #graphify/EXTRACTED #community/Community_None