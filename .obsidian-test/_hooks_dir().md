---
source_file: "vendor/graphify/graphify/hooks.py"
type: "code"
community: "Community None"
degree: 6
location: "L151"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# _hooks_dir()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 6

## Architecture Graph
```mermaid
graph LR
    center["_hooks_dir[]"]:::centerNode
    center -->|"calls"| N_str["str"]
    center -->|"contains"| N_vendor_graphify_graphify_hooks_py["hooks.py"]
    center -->|"calls"| N_graphify_hooks_install["install[]"]
    center -->|"calls"| N_graphify_hooks_uninstall["uninstall[]"]
    center -->|"calls"| N_graphify_hooks_status["status[]"]
    center -->|"rationale_for"| N_graphify_hooks_rationale_152["Return the git hooks directory, respecting core.hooksPath if set [e.g. Husky]."]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[Return the git hooks directory, respecting core.hooksPath if set (e.g. Husky).]] - `rationale_for` [EXTRACTED]
- [[hooks.py]] - `contains` [EXTRACTED]
- [[install()]] - `calls` [EXTRACTED]
- [[status()]] - `calls` [EXTRACTED]
- [[str]] - `calls` [INFERRED]
- [[uninstall()]] - `calls` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[_hooks_dir()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None