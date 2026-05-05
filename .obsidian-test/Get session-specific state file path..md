---
source_file: "vendor/external_plugins/claude-code/plugins/security-guidance/hooks/security_reminder_hook.py"
type: "rationale"
community: "Community None"
degree: 1
location: "L130"
tags:
  - graphify/rationale
  - graphify/EXTRACTED
  - community/Community_None
---

# Get session-specific state file path.

> [!info] Properties
> **File Type**: rationale
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 1

## Architecture Graph
```mermaid
graph LR
    center["Get session-specific state file path."]:::centerNode
    center -->|"rationale_for"| N_hooks_security_reminder_hook_get_state_file["get_state_file[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[get_state_file()]] - `rationale_for` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[Get session-specific state file path.]]
```

#graphify/rationale #graphify/EXTRACTED #community/Community_None