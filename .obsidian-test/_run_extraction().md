---
source_file: "vendor/graphify/tests/bench_extract.py"
type: "code"
community: "Community None"
degree: 5
location: "L96"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# _run_extraction()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 5

## Architecture Graph
```mermaid
graph LR
    center["_run_extraction[]"]:::centerNode
    center -->|"contains"| N_vendor_graphify_tests_bench_extract_py["bench_extract.py"]
    center -->|"calls"| N_tests_bench_extract_main["main[]"]
    center -->|"rationale_for"| N_tests_bench_extract_rationale_102["Run extraction, return [elapsed_seconds, node_count, edge_count]."]
    center -->|"calls"| N_graphify_cache_clear_cache["clear_cache[]"]
    center -->|"calls"| N_graphify_extract_extract["extract[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[Run extraction, return (elapsed_seconds, node_count, edge_count).]] - `rationale_for` [EXTRACTED]
- [[bench_extract.py]] - `contains` [EXTRACTED]
- [[clear_cache()]] - `calls` [INFERRED]
- [[extract()]] - `calls` [INFERRED]
- [[main()]] - `calls` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[_run_extraction()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None