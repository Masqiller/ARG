---
source_file: "vendor/graphify/tests/test_watch.py"
type: "code"
community: "Community None"
degree: 2
location: "L17"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# test_notify_only_creates_flag_dir()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 2

## Architecture Graph
```mermaid
graph LR
    center["test_notify_only_creates_flag_dir[]"]:::centerNode
    center -->|"contains"| N_vendor_graphify_tests_test_watch_py["test_watch.py"]
    center -->|"calls"| N_graphify_watch_notify_only["_notify_only[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[_notify_only()]] - `calls` [INFERRED]
- [[test_watch.py]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[test_notify_only_creates_flag_dir()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None