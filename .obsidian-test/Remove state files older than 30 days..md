---
source_file: "vendor/external_plugins/claude-code/plugins/security-guidance/hooks/security_reminder_hook.py"
type: "rationale"
community: "Community None"
degree: 1
location: "L135"
tags:
  - graphify/rationale
  - graphify/EXTRACTED
  - community/Community_None
---

# Remove state files older than 30 days.

> [!info] Properties
> **File Type**: rationale
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 1

## Architecture Graph
```mermaid
graph LR
    center["Remove state files older than 30 days."]:::centerNode
    center -->|"rationale_for"| N_hooks_security_reminder_hook_cleanup_old_state_files["cleanup_old_state_files[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[cleanup_old_state_files()]] - `rationale_for` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[Remove state files older than 30 days.]]
```

#graphify/rationale #graphify/EXTRACTED #community/Community_None