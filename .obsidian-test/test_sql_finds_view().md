---
source_file: "vendor/graphify/tests/test_multilang.py"
type: "code"
community: "Community None"
degree: 2
location: "L230"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# test_sql_finds_view()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 2

## Architecture Graph
```mermaid
graph LR
    center["test_sql_finds_view[]"]:::centerNode
    center -->|"contains"| N_vendor_graphify_tests_test_multilang_py["test_multilang.py"]
    center -->|"calls"| N_graphify_extract_extract_sql["extract_sql[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[extract_sql()]] - `calls` [INFERRED]
- [[test_multilang.py]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[test_sql_finds_view()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None