---
source_file: "vendor/external_plugins/claude-code/plugins/security-guidance/hooks/security_reminder_hook.py"
type: "code"
community: "Community None"
degree: 4
location: "L129"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# get_state_file()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 4

## Architecture Graph
```mermaid
graph LR
    center["get_state_file[]"]:::centerNode
    center -->|"contains"| N_vendor_external_plugins_claude_code_plugins_security_guidance_hooks_security_reminder_hook_py["security_reminder_hook.py"]
    center -->|"calls"| N_hooks_security_reminder_hook_load_state["load_state[]"]
    center -->|"calls"| N_hooks_security_reminder_hook_save_state["save_state[]"]
    center -->|"rationale_for"| N_hooks_security_reminder_hook_rationale_130["Get session-specific state file path."]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[Get session-specific state file path.]] - `rationale_for` [EXTRACTED]
- [[load_state()]] - `calls` [EXTRACTED]
- [[save_state()]] - `calls` [EXTRACTED]
- [[security_reminder_hook.py]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[get_state_file()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None