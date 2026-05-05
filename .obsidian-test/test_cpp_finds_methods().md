---
source_file: "vendor/graphify/tests/test_languages.py"
type: "code"
community: "Community None"
degree: 3
location: "L133"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# test_cpp_finds_methods()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 3

## Architecture Graph
```mermaid
graph LR
    center["test_cpp_finds_methods[]"]:::centerNode
    center -->|"contains"| N_vendor_graphify_tests_test_languages_py["test_languages.py"]
    center -->|"calls"| N_tests_test_languages_labels["_labels[]"]
    center -->|"calls"| N_graphify_extract_extract_cpp["extract_cpp[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[_labels()]] - `calls` [EXTRACTED]
- [[extract_cpp()]] - `calls` [INFERRED]
- [[test_languages.py]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[test_cpp_finds_methods()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None