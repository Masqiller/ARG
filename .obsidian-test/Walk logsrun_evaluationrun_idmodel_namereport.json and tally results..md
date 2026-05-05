---
source_file: "vendor/claude-mem/evals/swebench/summarize.py"
type: "rationale"
community: "Community None"
degree: 1
location: "L46"
tags:
  - graphify/rationale
  - graphify/EXTRACTED
  - community/Community_None
---

# Walk logs/run_evaluation/<run_id>/<model_name>/*/report.json and tally results.

> [!info] Properties
> **File Type**: rationale
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 1

## Architecture Graph
```mermaid
graph LR
    center["Walk logs/run_evaluation/<run_id>/<model_name>/*/report.json and tally results."]:::centerNode
    center -->|"rationale_for"| N_swebench_summarize_load_run_results["load_run_results[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[load_run_results()]] - `rationale_for` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[Walk logsrun_evaluationrun_idmodel_namereport.json and tally results.]]
```

#graphify/rationale #graphify/EXTRACTED #community/Community_None