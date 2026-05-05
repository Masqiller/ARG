---
source_file: "vendor/claude-mem/evals/swebench/run-batch.py"
type: "code"
community: "Community None"
degree: 4
location: "L211"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# append_prediction_row()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 4

## Architecture Graph
```mermaid
graph LR
    center["append_prediction_row[]"]:::centerNode
    center -->|"contains"| N_vendor_claude_mem_evals_swebench_run_batch_py["run-batch.py"]
    center -->|"calls"| N_swebench_run_batch_run_one_instance["run_one_instance[]"]
    center -->|"calls"| N_swebench_run_batch_main["main[]"]
    center -->|"rationale_for"| N_swebench_run_batch_rationale_218["Append one JSONL prediction row under a lock [appends are NOT atomic across thre"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[Append one JSONL prediction row under a lock (appends are NOT atomic across thre]] - `rationale_for` [EXTRACTED]
- [[main()_27]] - `calls` [EXTRACTED]
- [[run-batch.py]] - `contains` [EXTRACTED]
- [[run_one_instance()]] - `calls` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[append_prediction_row()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None