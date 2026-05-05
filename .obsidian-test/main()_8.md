---
source_file: "vendor/external_plugins/claude-code/plugins/security-guidance/hooks/security_reminder_hook.py"
type: "code"
community: "Community None"
degree: 7
location: "L217"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# main()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 7

## Architecture Graph
```mermaid
graph LR
    center["main[]"]:::centerNode
    center -->|"contains"| N_vendor_external_plugins_claude_code_plugins_security_guidance_hooks_security_reminder_hook_py["security_reminder_hook.py"]
    center -->|"calls"| N_hooks_security_reminder_hook_debug_log["debug_log[]"]
    center -->|"calls"| N_hooks_security_reminder_hook_cleanup_old_state_files["cleanup_old_state_files[]"]
    center -->|"calls"| N_hooks_security_reminder_hook_load_state["load_state[]"]
    center -->|"calls"| N_hooks_security_reminder_hook_save_state["save_state[]"]
    center -->|"calls"| N_hooks_security_reminder_hook_check_patterns["check_patterns[]"]
    center -->|"calls"| N_hooks_security_reminder_hook_extract_content_from_input["extract_content_from_input[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[check_patterns()]] - `calls` [EXTRACTED]
- [[cleanup_old_state_files()]] - `calls` [EXTRACTED]
- [[debug_log()]] - `calls` [EXTRACTED]
- [[extract_content_from_input()]] - `calls` [EXTRACTED]
- [[load_state()]] - `calls` [EXTRACTED]
- [[save_state()]] - `calls` [EXTRACTED]
- [[security_reminder_hook.py]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[main()_8]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None