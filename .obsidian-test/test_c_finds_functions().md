---
source_file: "vendor/graphify/tests/test_languages.py"
type: "code"
community: "Community None"
degree: 3
location: "L88"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# test_c_finds_functions()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 3

## Architecture Graph
```mermaid
graph LR
    center["test_c_finds_functions[]"]:::centerNode
    center -->|"contains"| N_vendor_graphify_tests_test_languages_py["test_languages.py"]
    center -->|"calls"| N_tests_test_languages_labels["_labels[]"]
    center -->|"calls"| N_graphify_extract_extract_c["extract_c[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[_labels()]] - `calls` [EXTRACTED]
- [[extract_c()]] - `calls` [INFERRED]
- [[test_languages.py]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[test_c_finds_functions()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None