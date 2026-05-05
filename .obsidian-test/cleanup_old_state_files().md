---
source_file: "vendor/external_plugins/claude-code/plugins/security-guidance/hooks/security_reminder_hook.py"
type: "code"
community: "Community None"
degree: 3
location: "L134"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# cleanup_old_state_files()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 3

## Architecture Graph
```mermaid
graph LR
    center["cleanup_old_state_files[]"]:::centerNode
    center -->|"contains"| N_vendor_external_plugins_claude_code_plugins_security_guidance_hooks_security_reminder_hook_py["security_reminder_hook.py"]
    center -->|"calls"| N_hooks_security_reminder_hook_main["main[]"]
    center -->|"rationale_for"| N_hooks_security_reminder_hook_rationale_135["Remove state files older than 30 days."]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[Remove state files older than 30 days.]] - `rationale_for` [EXTRACTED]
- [[main()_8]] - `calls` [EXTRACTED]
- [[security_reminder_hook.py]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[cleanup_old_state_files()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None