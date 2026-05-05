---
source_file: "vendor/external_plugins/caveman/caveman-compress/scripts/benchmark.py"
type: "code"
community: "Community None"
degree: 5
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# benchmark.py

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 5

## Architecture Graph
```mermaid
graph LR
    center["benchmark.py"]:::centerNode
    center -->|"imports_from"| N_vendor_external_plugins_caveman_caveman_compress_scripts_validate_py["validate.py"]
    center -->|"contains"| N_scripts_benchmark_count_tokens["count_tokens[]"]
    center -->|"contains"| N_scripts_benchmark_benchmark_pair["benchmark_pair[]"]
    center -->|"contains"| N_scripts_benchmark_print_table["print_table[]"]
    center -->|"contains"| N_scripts_benchmark_main["main[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[benchmark_pair()]] - `contains` [EXTRACTED]
- [[count_tokens()]] - `contains` [EXTRACTED]
- [[main()_11]] - `contains` [EXTRACTED]
- [[print_table()]] - `contains` [EXTRACTED]
- [[validate.py_1]] - `imports_from` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[benchmark.py_1]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None