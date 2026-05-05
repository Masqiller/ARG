---
source_file: "vendor/graphify/tests/test_benchmark.py"
type: "code"
community: "Community None"
degree: 5
location: "L52"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# test_run_benchmark_returns_reduction()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 5

## Architecture Graph
```mermaid
graph LR
    center["test_run_benchmark_returns_reduction[]"]:::centerNode
    center -->|"contains"| N_vendor_graphify_tests_test_benchmark_py["test_benchmark.py"]
    center -->|"calls"| N_tests_test_benchmark_make_graph["_make_graph[]"]
    center -->|"calls"| N_tests_test_benchmark_write_graph["_write_graph[]"]
    center -->|"calls"| N_graphify_benchmark_run_benchmark["run_benchmark[]"]
    center -->|"calls"| N_str["str"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[_make_graph()]] - `calls` [EXTRACTED]
- [[_write_graph()]] - `calls` [EXTRACTED]
- [[run_benchmark()]] - `calls` [INFERRED]
- [[str]] - `calls` [INFERRED]
- [[test_benchmark.py]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[test_run_benchmark_returns_reduction()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None