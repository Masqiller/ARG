---
source_file: "vendor/graphify/tests/test_hooks.py"
type: "rationale"
community: "Community None"
degree: 1
location: "L123"
tags:
  - graphify/rationale
  - graphify/EXTRACTED
  - community/Community_None
---

# Hook script must skip shebang extraction for .exe binaries (Windows).

> [!info] Properties
> **File Type**: rationale
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 1

## Architecture Graph
```mermaid
graph LR
    center["Hook script must skip shebang extraction for .exe binaries [Windows]."]:::centerNode
    center -->|"rationale_for"| N_tests_test_hooks_test_hook_skips_head_on_exe["test_hook_skips_head_on_exe[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[test_hook_skips_head_on_exe()]] - `rationale_for` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[Hook script must skip shebang extraction for .exe binaries (Windows).]]
```

#graphify/rationale #graphify/EXTRACTED #community/Community_None