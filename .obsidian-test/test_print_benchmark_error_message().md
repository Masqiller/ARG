---
source_file: "vendor/graphify/tests/test_benchmark.py"
type: "code"
community: "Community None"
degree: 2
location: "L116"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# test_print_benchmark_error_message()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 2

## Architecture Graph
```mermaid
graph LR
    center["test_print_benchmark_error_message[]"]:::centerNode
    center -->|"contains"| N_vendor_graphify_tests_test_benchmark_py["test_benchmark.py"]
    center -->|"calls"| N_graphify_benchmark_print_benchmark["print_benchmark[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[print_benchmark()]] - `calls` [INFERRED]
- [[test_benchmark.py]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[test_print_benchmark_error_message()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None