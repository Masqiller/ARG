---
source_file: "vendor/graphify/graphify/hooks.py"
type: "rationale"
community: "Community None"
degree: 1
location: "L152"
tags:
  - graphify/rationale
  - graphify/EXTRACTED
  - community/Community_None
---

# Return the git hooks directory, respecting core.hooksPath if set (e.g. Husky).

> [!info] Properties
> **File Type**: rationale
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 1

## Architecture Graph
```mermaid
graph LR
    center["Return the git hooks directory, respecting core.hooksPath if set [e.g. Husky]."]:::centerNode
    center -->|"rationale_for"| N_graphify_hooks_hooks_dir["_hooks_dir[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[_hooks_dir()]] - `rationale_for` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[Return the git hooks directory, respecting core.hooksPath if set (e.g. Husky).]]
```

#graphify/rationale #graphify/EXTRACTED #community/Community_None