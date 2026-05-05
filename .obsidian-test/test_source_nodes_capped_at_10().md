---
source_file: "vendor/graphify/tests/test_ingest.py"
type: "code"
community: "Community None"
degree: 2
location: "L46"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# test_source_nodes_capped_at_10()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 2

## Architecture Graph
```mermaid
graph LR
    center["test_source_nodes_capped_at_10[]"]:::centerNode
    center -->|"contains"| N_vendor_graphify_tests_test_ingest_py["test_ingest.py"]
    center -->|"calls"| N_graphify_ingest_save_query_result["save_query_result[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[save_query_result()]] - `calls` [INFERRED]
- [[test_ingest.py]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[test_source_nodes_capped_at_10()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None