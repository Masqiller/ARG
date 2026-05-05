---
source_file: "vendor/graphify/graphify/watch.py"
type: "code"
community: "Community None"
degree: 8
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# watch.py

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 8

## Architecture Graph
```mermaid
graph LR
    center["watch.py"]:::centerNode
    center -->|"contains"| N_graphify_watch_git_head["_git_head[]"]
    center -->|"contains"| N_graphify_watch_report_root_label["_report_root_label[]"]
    center -->|"contains"| N_graphify_watch_relativize_source_files["_relativize_source_files[]"]
    center -->|"contains"| N_graphify_watch_rebuild_code["_rebuild_code[]"]
    center -->|"contains"| N_graphify_watch_check_update["check_update[]"]
    center -->|"contains"| N_graphify_watch_notify_only["_notify_only[]"]
    center -->|"contains"| N_graphify_watch_has_non_code["_has_non_code[]"]
    center -->|"contains"| N_graphify_watch_watch["watch[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[_git_head()_1]] - `contains` [EXTRACTED]
- [[_has_non_code()]] - `contains` [EXTRACTED]
- [[_notify_only()]] - `contains` [EXTRACTED]
- [[_rebuild_code()]] - `contains` [EXTRACTED]
- [[_relativize_source_files()]] - `contains` [EXTRACTED]
- [[_report_root_label()]] - `contains` [EXTRACTED]
- [[check_update()]] - `contains` [EXTRACTED]
- [[watch()]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[watch.py]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None