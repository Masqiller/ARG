---
source_file: "vendor/external_plugins/caveman/benchmarks/run.py"
type: "code"
community: "Community None"
degree: 3
location: "L78"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# run_benchmarks()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 3

## Architecture Graph
```mermaid
graph LR
    center["run_benchmarks[]"]:::centerNode
    center -->|"contains"| N_vendor_external_plugins_caveman_benchmarks_run_py["run.py"]
    center -->|"calls"| N_benchmarks_run_call_api["call_api[]"]
    center -->|"calls"| N_benchmarks_run_main["main[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[call_api()]] - `calls` [EXTRACTED]
- [[main()_13]] - `calls` [EXTRACTED]
- [[run.py]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[run_benchmarks()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None