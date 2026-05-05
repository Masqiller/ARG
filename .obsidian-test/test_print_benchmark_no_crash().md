---
source_file: "vendor/graphify/tests/test_benchmark.py"
type: "code"
community: "Community None"
degree: 6
location: "L106"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# test_print_benchmark_no_crash()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 6

## Architecture Graph
```mermaid
graph LR
    center["test_print_benchmark_no_crash[]"]:::centerNode
    center -->|"contains"| N_vendor_graphify_tests_test_benchmark_py["test_benchmark.py"]
    center -->|"calls"| N_tests_test_benchmark_make_graph["_make_graph[]"]
    center -->|"calls"| N_tests_test_benchmark_write_graph["_write_graph[]"]
    center -->|"calls"| N_graphify_benchmark_run_benchmark["run_benchmark[]"]
    center -->|"calls"| N_str["str"]
    center -->|"calls"| N_graphify_benchmark_print_benchmark["print_benchmark[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[_make_graph()]] - `calls` [EXTRACTED]
- [[_write_graph()]] - `calls` [EXTRACTED]
- [[print_benchmark()]] - `calls` [INFERRED]
- [[run_benchmark()]] - `calls` [INFERRED]
- [[str]] - `calls` [INFERRED]
- [[test_benchmark.py]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[test_print_benchmark_no_crash()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None