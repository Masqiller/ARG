---
source_file: "vendor/external_plugins/caveman/skills/compress/scripts/benchmark.py"
type: "code"
community: "Community None"
degree: 5
location: "L44"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# main()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 5

## Architecture Graph
```mermaid
graph LR
    center["main[]"]:::centerNode
    center -->|"contains"| N_vendor_external_plugins_caveman_caveman_compress_scripts_benchmark_py["benchmark.py"]
    center -->|"calls"| N_scripts_benchmark_benchmark_pair["benchmark_pair[]"]
    center -->|"calls"| N_scripts_benchmark_print_table["print_table[]"]
    center -->|"contains"| N_vendor_external_plugins_caveman_plugins_caveman_skills_compress_scripts_benchmark_py["benchmark.py"]
    center -->|"contains"| N_vendor_external_plugins_caveman_skills_compress_scripts_benchmark_py["benchmark.py"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[benchmark.py_1]] - `contains` [EXTRACTED]
- [[benchmark.py_2]] - `contains` [EXTRACTED]
- [[benchmark.py_3]] - `contains` [EXTRACTED]
- [[benchmark_pair()]] - `calls` [EXTRACTED]
- [[print_table()]] - `calls` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[main()_11]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None