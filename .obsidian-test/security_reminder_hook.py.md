---
source_file: "vendor/external_plugins/claude-code/plugins/security-guidance/hooks/security_reminder_hook.py"
type: "code"
community: "Community None"
degree: 8
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# security_reminder_hook.py

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 8

## Architecture Graph
```mermaid
graph LR
    center["security_reminder_hook.py"]:::centerNode
    center -->|"contains"| N_hooks_security_reminder_hook_debug_log["debug_log[]"]
    center -->|"contains"| N_hooks_security_reminder_hook_get_state_file["get_state_file[]"]
    center -->|"contains"| N_hooks_security_reminder_hook_cleanup_old_state_files["cleanup_old_state_files[]"]
    center -->|"contains"| N_hooks_security_reminder_hook_load_state["load_state[]"]
    center -->|"contains"| N_hooks_security_reminder_hook_save_state["save_state[]"]
    center -->|"contains"| N_hooks_security_reminder_hook_check_patterns["check_patterns[]"]
    center -->|"contains"| N_hooks_security_reminder_hook_extract_content_from_input["extract_content_from_input[]"]
    center -->|"contains"| N_hooks_security_reminder_hook_main["main[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[check_patterns()]] - `contains` [EXTRACTED]
- [[cleanup_old_state_files()]] - `contains` [EXTRACTED]
- [[debug_log()]] - `contains` [EXTRACTED]
- [[extract_content_from_input()]] - `contains` [EXTRACTED]
- [[get_state_file()]] - `contains` [EXTRACTED]
- [[load_state()]] - `contains` [EXTRACTED]
- [[main()_8]] - `contains` [EXTRACTED]
- [[save_state()]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[security_reminder_hook.py]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None