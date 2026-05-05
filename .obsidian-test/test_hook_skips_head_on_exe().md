---
source_file: "vendor/graphify/tests/test_hooks.py"
type: "code"
community: "Community None"
degree: 2
location: "L122"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# test_hook_skips_head_on_exe()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 2

## Architecture Graph
```mermaid
graph LR
    center["test_hook_skips_head_on_exe[]"]:::centerNode
    center -->|"contains"| N_vendor_graphify_tests_test_hooks_py["test_hooks.py"]
    center -->|"rationale_for"| N_tests_test_hooks_rationale_123["Hook script must skip shebang extraction for .exe binaries [Windows]."]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[Hook script must skip shebang extraction for .exe binaries (Windows).]] - `rationale_for` [EXTRACTED]
- [[test_hooks.py]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[test_hook_skips_head_on_exe()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None