---
source_file: "vendor/external_plugins/claude-code/plugins/security-guidance/hooks/security_reminder_hook.py"
type: "rationale"
community: "Community None"
degree: 1
location: "L203"
tags:
  - graphify/rationale
  - graphify/EXTRACTED
  - community/Community_None
---

# Extract content to check from tool input based on tool type.

> [!info] Properties
> **File Type**: rationale
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 1

## Architecture Graph
```mermaid
graph LR
    center["Extract content to check from tool input based on tool type."]:::centerNode
    center -->|"rationale_for"| N_hooks_security_reminder_hook_extract_content_from_input["extract_content_from_input[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[extract_content_from_input()]] - `rationale_for` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[Extract content to check from tool input based on tool type.]]
```

#graphify/rationale #graphify/EXTRACTED #community/Community_None