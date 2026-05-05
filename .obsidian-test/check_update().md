---
source_file: "vendor/graphify/graphify/watch.py"
type: "code"
community: "Community None"
degree: 6
location: "L178"
tags:
  - graphify/code
  - graphify/INFERRED
  - community/Community_None
---

# check_update()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 6

## Architecture Graph
```mermaid
graph LR
    center["check_update[]"]:::centerNode
    center -->|"calls"| N_tests_test_watch_test_check_update_no_flag_returns_true["test_check_update_no_flag_returns_true[]"]
    center -->|"calls"| N_tests_test_watch_test_check_update_with_flag_returns_true_and_prints["test_check_update_with_flag_returns_true_and_prints[]"]
    center -->|"calls"| N_tests_test_watch_test_check_update_does_not_clear_flag["test_check_update_does_not_clear_flag[]"]
    center -->|"contains"| N_vendor_graphify_graphify_watch_py["watch.py"]
    center -->|"rationale_for"| N_graphify_watch_rationale_179["Check for pending semantic update flag and notify the user if set.      Cron-saf"]
    center -->|"calls"| N_graphify_main_main["main[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[Check for pending semantic update flag and notify the user if set.      Cron-saf]] - `rationale_for` [EXTRACTED]
- [[main()_2]] - `calls` [INFERRED]
- [[test_check_update_does_not_clear_flag()]] - `calls` [INFERRED]
- [[test_check_update_no_flag_returns_true()]] - `calls` [INFERRED]
- [[test_check_update_with_flag_returns_true_and_prints()]] - `calls` [INFERRED]
- [[watch.py]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[check_update()]]
```

#graphify/code #graphify/INFERRED #community/Community_None