---
source_file: "vendor/external_plugins/claude-code/plugins/security-guidance/hooks/security_reminder_hook.py"
type: "rationale"
community: "Community None"
degree: 1
location: "L172"
tags:
  - graphify/rationale
  - graphify/EXTRACTED
  - community/Community_None
---

# Save the state of shown warnings to file.

> [!info] Properties
> **File Type**: rationale
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 1

## Architecture Graph
```mermaid
graph LR
    center["Save the state of shown warnings to file."]:::centerNode
    center -->|"rationale_for"| N_hooks_security_reminder_hook_save_state["save_state[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[save_state()]] - `rationale_for` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[Save the state of shown warnings to file.]]
```

#graphify/rationale #graphify/EXTRACTED #community/Community_None