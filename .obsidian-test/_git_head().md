---
source_file: "vendor/graphify/graphify/export.py"
type: "code"
community: "Community None"
degree: 3
location: "L352"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# _git_head()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 3

## Architecture Graph
```mermaid
graph LR
    center["_git_head[]"]:::centerNode
    center -->|"contains"| N_vendor_graphify_graphify_export_py["export.py"]
    center -->|"calls"| N_graphify_export_to_json["to_json[]"]
    center -->|"rationale_for"| N_graphify_export_rationale_353["Return the current git HEAD commit hash, or None if not in a git repo."]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[Return the current git HEAD commit hash, or None if not in a git repo.]] - `rationale_for` [EXTRACTED]
- [[export.py]] - `contains` [EXTRACTED]
- [[to_json()]] - `calls` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[_git_head()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None