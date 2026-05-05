---
source_file: "vendor/external_plugins/caveman/benchmarks/run.py"
type: "code"
community: "Community None"
degree: 2
location: "L44"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# load_caveman_system()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 2

## Architecture Graph
```mermaid
graph LR
    center["load_caveman_system[]"]:::centerNode
    center -->|"contains"| N_vendor_external_plugins_caveman_benchmarks_run_py["run.py"]
    center -->|"calls"| N_benchmarks_run_main["main[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[main()_13]] - `calls` [EXTRACTED]
- [[run.py]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[load_caveman_system()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None