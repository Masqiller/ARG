---
source_file: "vendor/graphify/tests/test_languages.py"
type: "rationale"
community: "Community None"
degree: 1
location: "L830"
tags:
  - graphify/rationale
  - graphify/EXTRACTED
  - community/Community_None
---

# Functions without dynamic imports should not get spurious imports_from edges.

> [!info] Properties
> **File Type**: rationale
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 1

## Architecture Graph
```mermaid
graph LR
    center["Functions without dynamic imports should not get spurious imports_from edges."]:::centerNode
    center -->|"rationale_for"| N_tests_test_languages_test_ts_no_dynamic_import_in_sync_fn["test_ts_no_dynamic_import_in_sync_fn[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[test_ts_no_dynamic_import_in_sync_fn()]] - `rationale_for` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[Functions without dynamic imports should not get spurious imports_from edges.]]
```

#graphify/rationale #graphify/EXTRACTED #community/Community_None