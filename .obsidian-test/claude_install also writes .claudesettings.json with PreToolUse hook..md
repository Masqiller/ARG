---
source_file: "vendor/graphify/tests/test_claude_md.py"
type: "rationale"
community: "Community None"
degree: 1
location: "L105"
tags:
  - graphify/rationale
  - graphify/EXTRACTED
  - community/Community_None
---

# claude_install also writes .claude/settings.json with PreToolUse hook.

> [!info] Properties
> **File Type**: rationale
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 1

## Architecture Graph
```mermaid
graph LR
    center["claude_install also writes .claude/settings.json with PreToolUse hook."]:::centerNode
    center -->|"rationale_for"| N_tests_test_claude_md_test_install_creates_settings_json["test_install_creates_settings_json[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[test_install_creates_settings_json()]] - `rationale_for` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[claude_install also writes .claudesettings.json with PreToolUse hook.]]
```

#graphify/rationale #graphify/EXTRACTED #community/Community_None