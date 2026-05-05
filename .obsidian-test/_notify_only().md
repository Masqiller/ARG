---
source_file: "vendor/graphify/graphify/watch.py"
type: "code"
community: "Community None"
degree: 6
location: "L193"
tags:
  - graphify/code
  - graphify/INFERRED
  - community/Community_None
---

# _notify_only()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 6

## Architecture Graph
```mermaid
graph LR
    center["_notify_only[]"]:::centerNode
    center -->|"calls"| N_tests_test_watch_test_notify_only_creates_flag["test_notify_only_creates_flag[]"]
    center -->|"calls"| N_tests_test_watch_test_notify_only_creates_flag_dir["test_notify_only_creates_flag_dir[]"]
    center -->|"calls"| N_tests_test_watch_test_notify_only_idempotent["test_notify_only_idempotent[]"]
    center -->|"contains"| N_vendor_graphify_graphify_watch_py["watch.py"]
    center -->|"calls"| N_graphify_watch_watch["watch[]"]
    center -->|"rationale_for"| N_graphify_watch_rationale_194["Write a flag file and print a notification [fallback for non-code-only corpora]."]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[Write a flag file and print a notification (fallback for non-code-only corpora).]] - `rationale_for` [EXTRACTED]
- [[test_notify_only_creates_flag()]] - `calls` [INFERRED]
- [[test_notify_only_creates_flag_dir()]] - `calls` [INFERRED]
- [[test_notify_only_idempotent()]] - `calls` [INFERRED]
- [[watch()]] - `calls` [EXTRACTED]
- [[watch.py]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[_notify_only()]]
```

#graphify/code #graphify/INFERRED #community/Community_None