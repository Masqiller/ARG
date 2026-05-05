---
source_file: "vendor/external_plugins/caveman/evals/measure.py"
type: "rationale"
community: "Community None"
degree: 1
location: "L1"
tags:
  - graphify/rationale
  - graphify/EXTRACTED
  - community/Community_None
---

# Read evals/snapshots/results.json (produced by llm_run.py) and report real token

> [!info] Properties
> **File Type**: rationale
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 1

## Architecture Graph
```mermaid
graph LR
    center["Read evals/snapshots/results.json [produced by llm_run.py] and report real token"]:::centerNode
    center -->|"rationale_for"| N_vendor_external_plugins_caveman_evals_measure_py["measure.py"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[measure.py]] - `rationale_for` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[Read evalssnapshotsresults.json (produced by llm_run.py) and report real token]]
```

#graphify/rationale #graphify/EXTRACTED #community/Community_None