---
source_file: "vendor/graphify/tests/test_hypergraph.py"
type: "code"
community: "Community None"
degree: 3
location: "L114"
tags:
  - graphify/code
  - graphify/INFERRED
  - community/Community_None
---

# test_to_json_includes_hyperedges()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 3

## Architecture Graph
```mermaid
graph LR
    center["test_to_json_includes_hyperedges[]"]:::centerNode
    center -->|"contains"| N_vendor_graphify_tests_test_hypergraph_py["test_hypergraph.py"]
    center -->|"calls"| N_knowledge_corpusstore_corpusstore_list[".list[]"]
    center -->|"calls"| N_graphify_export_to_json["to_json[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[.list()]] - `calls` [INFERRED]
- [[test_hypergraph.py]] - `contains` [EXTRACTED]
- [[to_json()]] - `calls` [INFERRED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[test_to_json_includes_hyperedges()]]
```

#graphify/code #graphify/INFERRED #community/Community_None