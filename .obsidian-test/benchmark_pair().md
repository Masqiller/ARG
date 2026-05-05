---
source_file: "vendor/external_plugins/caveman/skills/compress/scripts/benchmark.py"
type: "code"
community: "Community None"
degree: 5
location: "L25"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# benchmark_pair()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 5

## Architecture Graph
```mermaid
graph LR
    center["benchmark_pair[]"]:::centerNode
    center -->|"contains"| N_vendor_external_plugins_caveman_caveman_compress_scripts_benchmark_py["benchmark.py"]
    center -->|"calls"| N_scripts_benchmark_count_tokens["count_tokens[]"]
    center -->|"calls"| N_scripts_benchmark_main["main[]"]
    center -->|"contains"| N_vendor_external_plugins_caveman_plugins_caveman_skills_compress_scripts_benchmark_py["benchmark.py"]
    center -->|"contains"| N_vendor_external_plugins_caveman_skills_compress_scripts_benchmark_py["benchmark.py"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[benchmark.py_1]] - `contains` [EXTRACTED]
- [[benchmark.py_2]] - `contains` [EXTRACTED]
- [[benchmark.py_3]] - `contains` [EXTRACTED]
- [[count_tokens()]] - `calls` [EXTRACTED]
- [[main()_11]] - `calls` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[benchmark_pair()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None