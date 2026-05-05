---
source_file: "vendor/graphify/tests/test_watch.py"
type: "code"
community: "Community None"
degree: 2
location: "L83"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# test_watch_raises_without_watchdog()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 2

## Architecture Graph
```mermaid
graph LR
    center["test_watch_raises_without_watchdog[]"]:::centerNode
    center -->|"contains"| N_vendor_graphify_tests_test_watch_py["test_watch.py"]
    center -->|"calls"| N_graphify_watch_watch["watch[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[test_watch.py]] - `contains` [EXTRACTED]
- [[watch()]] - `calls` [INFERRED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[test_watch_raises_without_watchdog()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None