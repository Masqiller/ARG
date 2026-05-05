---
source_file: "vendor/graphify/tests/test_languages.py"
type: "code"
community: "Community None"
degree: 3
location: "L69"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# test_java_import_edges_have_import_context()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 3

## Architecture Graph
```mermaid
graph LR
    center["test_java_import_edges_have_import_context[]"]:::centerNode
    center -->|"contains"| N_vendor_graphify_tests_test_languages_py["test_languages.py"]
    center -->|"calls"| N_tests_test_languages_edges_with_relation["_edges_with_relation[]"]
    center -->|"calls"| N_graphify_extract_extract_java["extract_java[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[_edges_with_relation()]] - `calls` [EXTRACTED]
- [[extract_java()]] - `calls` [INFERRED]
- [[test_languages.py]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[test_java_import_edges_have_import_context()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None