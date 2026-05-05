---
source_file: "vendor/graphify/graphify/benchmark.py"
type: "code"
community: "Community None"
degree: 5
location: "L114"
tags:
  - graphify/code
  - graphify/INFERRED
  - community/Community_None
---

# print_benchmark()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 5

## Architecture Graph
```mermaid
graph LR
    center["print_benchmark[]"]:::centerNode
    center -->|"calls"| N_tests_test_benchmark_test_print_benchmark_no_crash["test_print_benchmark_no_crash[]"]
    center -->|"calls"| N_tests_test_benchmark_test_print_benchmark_error_message["test_print_benchmark_error_message[]"]
    center -->|"contains"| N_vendor_graphify_graphify_benchmark_py["benchmark.py"]
    center -->|"rationale_for"| N_graphify_benchmark_rationale_115["Print a human-readable benchmark report."]
    center -->|"calls"| N_graphify_main_main["main[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[Print a human-readable benchmark report.]] - `rationale_for` [EXTRACTED]
- [[benchmark.py]] - `contains` [EXTRACTED]
- [[main()_2]] - `calls` [INFERRED]
- [[test_print_benchmark_error_message()]] - `calls` [INFERRED]
- [[test_print_benchmark_no_crash()]] - `calls` [INFERRED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[print_benchmark()]]
```

#graphify/code #graphify/INFERRED #community/Community_None