---
source_file: "vendor/graphify/tests/test_languages.py"
type: "code"
community: "Community None"
degree: 3
location: "L434"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# test_swift_import_edges_have_import_context()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 3

## Architecture Graph
```mermaid
graph LR
    center["test_swift_import_edges_have_import_context[]"]:::centerNode
    center -->|"contains"| N_vendor_graphify_tests_test_languages_py["test_languages.py"]
    center -->|"calls"| N_tests_test_languages_edges_with_relation["_edges_with_relation[]"]
    center -->|"calls"| N_graphify_extract_extract_swift["extract_swift[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[_edges_with_relation()]] - `calls` [EXTRACTED]
- [[extract_swift()]] - `calls` [INFERRED]
- [[test_languages.py]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[test_swift_import_edges_have_import_context()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None