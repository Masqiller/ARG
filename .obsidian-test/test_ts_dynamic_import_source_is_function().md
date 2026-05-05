---
source_file: "vendor/graphify/tests/test_languages.py"
type: "code"
community: "Community None"
degree: 3
location: "L818"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# test_ts_dynamic_import_source_is_function()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 3

## Architecture Graph
```mermaid
graph LR
    center["test_ts_dynamic_import_source_is_function[]"]:::centerNode
    center -->|"contains"| N_vendor_graphify_tests_test_languages_py["test_languages.py"]
    center -->|"rationale_for"| N_tests_test_languages_rationale_819["Dynamic import edge source should be the enclosing function, not the file."]
    center -->|"calls"| N_graphify_extract_extract_js["extract_js[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[Dynamic import edge source should be the enclosing function, not the file.]] - `rationale_for` [EXTRACTED]
- [[extract_js()]] - `calls` [INFERRED]
- [[test_languages.py]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[test_ts_dynamic_import_source_is_function()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None