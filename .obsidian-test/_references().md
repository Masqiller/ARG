---
source_file: "vendor/graphify/tests/test_languages.py"
type: "code"
community: "Community None"
degree: 2
location: "L28"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# _references()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 2

## Architecture Graph
```mermaid
graph LR
    center["_references[]"]:::centerNode
    center -->|"contains"| N_vendor_graphify_tests_test_languages_py["test_languages.py"]
    center -->|"calls"| N_tests_test_languages_test_csharp_field_type_references_have_field_context["test_csharp_field_type_references_have_field_context[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[test_csharp_field_type_references_have_field_context()]] - `calls` [EXTRACTED]
- [[test_languages.py]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[_references()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None