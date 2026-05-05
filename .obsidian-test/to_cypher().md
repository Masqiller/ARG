---
source_file: "vendor/graphify/graphify/export.py"
type: "code"
community: "Community None"
degree: 4
location: "L433"
tags:
  - graphify/code
  - graphify/INFERRED
  - community/Community_None
---

# to_cypher()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 4

## Architecture Graph
```mermaid
graph LR
    center["to_cypher[]"]:::centerNode
    center -->|"calls"| N_tests_test_export_test_to_cypher_creates_file["test_to_cypher_creates_file[]"]
    center -->|"calls"| N_tests_test_export_test_to_cypher_contains_merge_statements["test_to_cypher_contains_merge_statements[]"]
    center -->|"contains"| N_vendor_graphify_graphify_export_py["export.py"]
    center -->|"calls"| N_graphify_export_cypher_escape["_cypher_escape[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[_cypher_escape()]] - `calls` [EXTRACTED]
- [[export.py]] - `contains` [EXTRACTED]
- [[test_to_cypher_contains_merge_statements()]] - `calls` [INFERRED]
- [[test_to_cypher_creates_file()]] - `calls` [INFERRED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[to_cypher()]]
```

#graphify/code #graphify/INFERRED #community/Community_None