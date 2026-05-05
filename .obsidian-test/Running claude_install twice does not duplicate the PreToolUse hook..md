---
source_file: "vendor/graphify/tests/test_claude_md.py"
type: "rationale"
community: "Community None"
degree: 1
location: "L116"
tags:
  - graphify/rationale
  - graphify/EXTRACTED
  - community/Community_None
---

# Running claude_install twice does not duplicate the PreToolUse hook.

> [!info] Properties
> **File Type**: rationale
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 1

## Architecture Graph
```mermaid
graph LR
    center["Running claude_install twice does not duplicate the PreToolUse hook."]:::centerNode
    center -->|"rationale_for"| N_tests_test_claude_md_test_install_settings_json_idempotent["test_install_settings_json_idempotent[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[test_install_settings_json_idempotent()]] - `rationale_for` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[Running claude_install twice does not duplicate the PreToolUse hook.]]
```

#graphify/rationale #graphify/EXTRACTED #community/Community_None