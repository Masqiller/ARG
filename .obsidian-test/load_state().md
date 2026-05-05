---
source_file: "vendor/external_plugins/claude-code/plugins/security-guidance/hooks/security_reminder_hook.py"
type: "code"
community: "Community None"
degree: 4
location: "L159"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# load_state()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 4

## Architecture Graph
```mermaid
graph LR
    center["load_state[]"]:::centerNode
    center -->|"contains"| N_vendor_external_plugins_claude_code_plugins_security_guidance_hooks_security_reminder_hook_py["security_reminder_hook.py"]
    center -->|"calls"| N_hooks_security_reminder_hook_get_state_file["get_state_file[]"]
    center -->|"calls"| N_hooks_security_reminder_hook_main["main[]"]
    center -->|"rationale_for"| N_hooks_security_reminder_hook_rationale_160["Load the state of shown warnings from file."]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[Load the state of shown warnings from file.]] - `rationale_for` [EXTRACTED]
- [[get_state_file()]] - `calls` [EXTRACTED]
- [[main()_8]] - `calls` [EXTRACTED]
- [[security_reminder_hook.py]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[load_state()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None