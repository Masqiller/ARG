---
source_file: "vendor/external_plugins/caveman/benchmarks/run.py"
type: "code"
community: "Community None"
degree: 12
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# run.py

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 12

## Architecture Graph
```mermaid
graph LR
    center["run.py"]:::centerNode
    center -->|"contains"| N_benchmarks_run_load_prompts["load_prompts[]"]
    center -->|"contains"| N_benchmarks_run_load_caveman_system["load_caveman_system[]"]
    center -->|"contains"| N_benchmarks_run_sha256_file["sha256_file[]"]
    center -->|"contains"| N_benchmarks_run_call_api["call_api[]"]
    center -->|"contains"| N_benchmarks_run_run_benchmarks["run_benchmarks[]"]
    center -->|"contains"| N_benchmarks_run_compute_stats["compute_stats[]"]
    center -->|"contains"| N_benchmarks_run_format_prompt_label["format_prompt_label[]"]
    center -->|"contains"| N_benchmarks_run_format_table["format_table[]"]
    center -->|"contains"| N_benchmarks_run_save_results["save_results[]"]
    center -->|"contains"| N_benchmarks_run_update_readme["update_readme[]"]
    center -->|"contains"| N_benchmarks_run_dry_run["dry_run[]"]
    center -->|"contains"| N_benchmarks_run_main["main[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[call_api()]] - `contains` [EXTRACTED]
- [[compute_stats()]] - `contains` [EXTRACTED]
- [[dry_run()]] - `contains` [EXTRACTED]
- [[format_prompt_label()]] - `contains` [EXTRACTED]
- [[format_table()]] - `contains` [EXTRACTED]
- [[load_caveman_system()]] - `contains` [EXTRACTED]
- [[load_prompts()]] - `contains` [EXTRACTED]
- [[main()_13]] - `contains` [EXTRACTED]
- [[run_benchmarks()]] - `contains` [EXTRACTED]
- [[save_results()]] - `contains` [EXTRACTED]
- [[sha256_file()]] - `contains` [EXTRACTED]
- [[update_readme()]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[run.py]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None