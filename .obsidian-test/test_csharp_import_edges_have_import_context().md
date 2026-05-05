---
source_file: "vendor/graphify/tests/test_languages.py"
type: "code"
community: "Community None"
degree: 2
location: "L231"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# test_csharp_import_edges_have_import_context()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 2

## Architecture Graph
```mermaid
graph LR
    center["test_csharp_import_edges_have_import_context[]"]:::centerNode
    center -->|"contains"| N_vendor_graphify_tests_test_languages_py["test_languages.py"]
    center -->|"calls"| N_graphify_extract_extract_csharp["extract_csharp[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[extract_csharp()]] - `calls` [INFERRED]
- [[test_languages.py]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[test_csharp_import_edges_have_import_context()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None