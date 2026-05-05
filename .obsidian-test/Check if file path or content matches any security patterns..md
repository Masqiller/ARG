---
source_file: "vendor/external_plugins/claude-code/plugins/security-guidance/hooks/security_reminder_hook.py"
type: "rationale"
community: "Community None"
degree: 1
location: "L184"
tags:
  - graphify/rationale
  - graphify/EXTRACTED
  - community/Community_None
---

# Check if file path or content matches any security patterns.

> [!info] Properties
> **File Type**: rationale
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 1

## Architecture Graph
```mermaid
graph LR
    center["Check if file path or content matches any security patterns."]:::centerNode
    center -->|"rationale_for"| N_hooks_security_reminder_hook_check_patterns["check_patterns[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[check_patterns()]] - `rationale_for` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[Check if file path or content matches any security patterns.]]
```

#graphify/rationale #graphify/EXTRACTED #community/Community_None