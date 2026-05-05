---
source_file: "vendor/external_plugins/caveman/evals/measure.py"
type: "code"
community: "Community None"
degree: 4
location: "L48"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# main()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 4

## Architecture Graph
```mermaid
graph LR
    center["main[]"]:::centerNode
    center -->|"contains"| N_vendor_external_plugins_caveman_evals_measure_py["measure.py"]
    center -->|"calls"| N_evals_measure_count["count[]"]
    center -->|"calls"| N_evals_measure_stats["stats[]"]
    center -->|"calls"| N_evals_measure_fmt_pct["fmt_pct[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[count()_1]] - `calls` [EXTRACTED]
- [[fmt_pct()]] - `calls` [EXTRACTED]
- [[measure.py]] - `contains` [EXTRACTED]
- [[stats()]] - `calls` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[main()_16]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None