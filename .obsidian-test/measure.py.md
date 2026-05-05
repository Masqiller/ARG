---
source_file: "vendor/external_plugins/caveman/evals/measure.py"
type: "code"
community: "Community None"
degree: 5
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# measure.py

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 5

## Architecture Graph
```mermaid
graph LR
    center["measure.py"]:::centerNode
    center -->|"contains"| N_evals_measure_count["count[]"]
    center -->|"contains"| N_evals_measure_stats["stats[]"]
    center -->|"contains"| N_evals_measure_fmt_pct["fmt_pct[]"]
    center -->|"contains"| N_evals_measure_main["main[]"]
    center -->|"rationale_for"| N_evals_measure_rationale_1["Read evals/snapshots/results.json [produced by llm_run.py] and report real token"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[Read evalssnapshotsresults.json (produced by llm_run.py) and report real token]] - `rationale_for` [EXTRACTED]
- [[count()_1]] - `contains` [EXTRACTED]
- [[fmt_pct()]] - `contains` [EXTRACTED]
- [[main()_16]] - `contains` [EXTRACTED]
- [[stats()]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[measure.py]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None