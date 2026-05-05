---
source_file: "vendor/graphify/tests/test_watch.py"
type: "rationale"
community: "Community None"
degree: 1
location: "L74"
tags:
  - graphify/rationale
  - graphify/EXTRACTED
  - community/Community_None
---

# check_update never removes the needs_update flag (clearing is LLM's job).

> [!info] Properties
> **File Type**: rationale
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 1

## Architecture Graph
```mermaid
graph LR
    center["check_update never removes the needs_update flag [clearing is LLM's job]."]:::centerNode
    center -->|"rationale_for"| N_tests_test_watch_test_check_update_does_not_clear_flag["test_check_update_does_not_clear_flag[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[test_check_update_does_not_clear_flag()]] - `rationale_for` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[check_update never removes the needs_update flag (clearing is LLM's job).]]
```

#graphify/rationale #graphify/EXTRACTED #community/Community_None