---
source_file: "vendor/graphify/tests/test_languages.py"
type: "rationale"
community: "Community None"
degree: 1
location: "L819"
tags:
  - graphify/rationale
  - graphify/EXTRACTED
  - community/Community_None
---

# Dynamic import edge source should be the enclosing function, not the file.

> [!info] Properties
> **File Type**: rationale
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 1

## Architecture Graph
```mermaid
graph LR
    center["Dynamic import edge source should be the enclosing function, not the file."]:::centerNode
    center -->|"rationale_for"| N_tests_test_languages_test_ts_dynamic_import_source_is_function["test_ts_dynamic_import_source_is_function[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[test_ts_dynamic_import_source_is_function()]] - `rationale_for` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[Dynamic import edge source should be the enclosing function, not the file.]]
```

#graphify/rationale #graphify/EXTRACTED #community/Community_None