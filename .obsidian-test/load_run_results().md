---
source_file: "vendor/claude-mem/evals/swebench/summarize.py"
type: "code"
community: "Community None"
degree: 3
location: "L40"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# load_run_results()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 3

## Architecture Graph
```mermaid
graph LR
    center["load_run_results[]"]:::centerNode
    center -->|"contains"| N_vendor_claude_mem_evals_swebench_summarize_py["summarize.py"]
    center -->|"calls"| N_swebench_summarize_main["main[]"]
    center -->|"rationale_for"| N_swebench_summarize_rationale_46["Walk logs/run_evaluation/<run_id>/<model_name>/*/report.json and tally results."]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[Walk logsrun_evaluationrun_idmodel_namereport.json and tally results.]] - `rationale_for` [EXTRACTED]
- [[main()_26]] - `calls` [EXTRACTED]
- [[summarize.py]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[load_run_results()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None