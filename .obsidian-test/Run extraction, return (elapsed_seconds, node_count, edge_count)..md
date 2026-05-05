---
source_file: "vendor/graphify/tests/bench_extract.py"
type: "rationale"
community: "Community None"
degree: 1
location: "L102"
tags:
  - graphify/rationale
  - graphify/EXTRACTED
  - community/Community_None
---

# Run extraction, return (elapsed_seconds, node_count, edge_count).

> [!info] Properties
> **File Type**: rationale
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 1

## Architecture Graph
```mermaid
graph LR
    center["Run extraction, return [elapsed_seconds, node_count, edge_count]."]:::centerNode
    center -->|"rationale_for"| N_tests_bench_extract_run_extraction["_run_extraction[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[_run_extraction()]] - `rationale_for` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[Run extraction, return (elapsed_seconds, node_count, edge_count).]]
```

#graphify/rationale #graphify/EXTRACTED #community/Community_None