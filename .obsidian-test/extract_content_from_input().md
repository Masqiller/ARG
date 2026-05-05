---
source_file: "vendor/external_plugins/claude-code/plugins/security-guidance/hooks/security_reminder_hook.py"
type: "code"
community: "Community None"
degree: 3
location: "L202"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# extract_content_from_input()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 3

## Architecture Graph
```mermaid
graph LR
    center["extract_content_from_input[]"]:::centerNode
    center -->|"contains"| N_vendor_external_plugins_claude_code_plugins_security_guidance_hooks_security_reminder_hook_py["security_reminder_hook.py"]
    center -->|"calls"| N_hooks_security_reminder_hook_main["main[]"]
    center -->|"rationale_for"| N_hooks_security_reminder_hook_rationale_203["Extract content to check from tool input based on tool type."]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[Extract content to check from tool input based on tool type.]] - `rationale_for` [EXTRACTED]
- [[main()_8]] - `calls` [EXTRACTED]
- [[security_reminder_hook.py]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[extract_content_from_input()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None