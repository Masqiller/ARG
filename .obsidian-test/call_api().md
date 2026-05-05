---
source_file: "vendor/external_plugins/caveman/benchmarks/run.py"
type: "code"
community: "Community None"
degree: 2
location: "L52"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# call_api()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 2

## Architecture Graph
```mermaid
graph LR
    center["call_api[]"]:::centerNode
    center -->|"contains"| N_vendor_external_plugins_caveman_benchmarks_run_py["run.py"]
    center -->|"calls"| N_benchmarks_run_run_benchmarks["run_benchmarks[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[run.py]] - `contains` [EXTRACTED]
- [[run_benchmarks()]] - `calls` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[call_api()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None