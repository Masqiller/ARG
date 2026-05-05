---
source_file: "vendor/graphify/tests/test_multilang.py"
type: "code"
community: "Community None"
degree: 2
location: "L182"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# test_extract_dispatches_all_languages()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 2

## Architecture Graph
```mermaid
graph LR
    center["test_extract_dispatches_all_languages[]"]:::centerNode
    center -->|"contains"| N_vendor_graphify_tests_test_multilang_py["test_multilang.py"]
    center -->|"calls"| N_graphify_extract_extract["extract[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[extract()]] - `calls` [INFERRED]
- [[test_multilang.py]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[test_extract_dispatches_all_languages()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None