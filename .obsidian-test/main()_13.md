---
source_file: "vendor/external_plugins/caveman/benchmarks/run.py"
type: "code"
community: "Community None"
degree: 10
location: "L239"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# main()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 10

## Architecture Graph
```mermaid
graph LR
    center["main[]"]:::centerNode
    center -->|"contains"| N_vendor_external_plugins_caveman_benchmarks_run_py["run.py"]
    center -->|"calls"| N_benchmarks_run_load_prompts["load_prompts[]"]
    center -->|"calls"| N_benchmarks_run_load_caveman_system["load_caveman_system[]"]
    center -->|"calls"| N_benchmarks_run_sha256_file["sha256_file[]"]
    center -->|"calls"| N_benchmarks_run_run_benchmarks["run_benchmarks[]"]
    center -->|"calls"| N_benchmarks_run_compute_stats["compute_stats[]"]
    center -->|"calls"| N_benchmarks_run_format_table["format_table[]"]
    center -->|"calls"| N_benchmarks_run_save_results["save_results[]"]
    center -->|"calls"| N_benchmarks_run_update_readme["update_readme[]"]
    center -->|"calls"| N_benchmarks_run_dry_run["dry_run[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[compute_stats()]] - `calls` [EXTRACTED]
- [[dry_run()]] - `calls` [EXTRACTED]
- [[format_table()]] - `calls` [EXTRACTED]
- [[load_caveman_system()]] - `calls` [EXTRACTED]
- [[load_prompts()]] - `calls` [EXTRACTED]
- [[run.py]] - `contains` [EXTRACTED]
- [[run_benchmarks()]] - `calls` [EXTRACTED]
- [[save_results()]] - `calls` [EXTRACTED]
- [[sha256_file()]] - `calls` [EXTRACTED]
- [[update_readme()]] - `calls` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[main()_13]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None