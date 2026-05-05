---
source_file: "vendor/graphify/tests/test_languages.py"
type: "code"
community: "Community None"
degree: 3
location: "L799"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# test_ts_dynamic_import_extracts_edges()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 3

## Architecture Graph
```mermaid
graph LR
    center["test_ts_dynamic_import_extracts_edges[]"]:::centerNode
    center -->|"contains"| N_vendor_graphify_tests_test_languages_py["test_languages.py"]
    center -->|"rationale_for"| N_tests_test_languages_rationale_800["Dynamic import[] calls inside functions should produce imports_from edges."]
    center -->|"calls"| N_graphify_extract_extract_js["extract_js[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[Dynamic import() calls inside functions should produce imports_from edges.]] - `rationale_for` [EXTRACTED]
- [[extract_js()]] - `calls` [INFERRED]
- [[test_languages.py]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[test_ts_dynamic_import_extracts_edges()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None