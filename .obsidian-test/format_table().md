---
source_file: "vendor/external_plugins/caveman/benchmarks/run.py"
type: "code"
community: "Community None"
degree: 3
location: "L164"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# format_table()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 3

## Architecture Graph
```mermaid
graph LR
    center["format_table[]"]:::centerNode
    center -->|"contains"| N_vendor_external_plugins_caveman_benchmarks_run_py["run.py"]
    center -->|"calls"| N_benchmarks_run_format_prompt_label["format_prompt_label[]"]
    center -->|"calls"| N_benchmarks_run_main["main[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[format_prompt_label()]] - `calls` [EXTRACTED]
- [[main()_13]] - `calls` [EXTRACTED]
- [[run.py]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[format_table()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None