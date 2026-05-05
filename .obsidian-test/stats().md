---
source_file: "vendor/external_plugins/caveman/evals/measure.py"
type: "code"
community: "Community None"
degree: 2
location: "L33"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# stats()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 2

## Architecture Graph
```mermaid
graph LR
    center["stats[]"]:::centerNode
    center -->|"contains"| N_vendor_external_plugins_caveman_evals_measure_py["measure.py"]
    center -->|"calls"| N_evals_measure_main["main[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[main()_16]] - `calls` [EXTRACTED]
- [[measure.py]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[stats()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None