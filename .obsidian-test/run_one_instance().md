---
source_file: "vendor/claude-mem/evals/swebench/run-batch.py"
type: "code"
community: "Community None"
degree: 4
location: "L235"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# run_one_instance()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 4

## Architecture Graph
```mermaid
graph LR
    center["run_one_instance[]"]:::centerNode
    center -->|"contains"| N_vendor_claude_mem_evals_swebench_run_batch_py["run-batch.py"]
    center -->|"calls"| N_swebench_run_batch_append_prediction_row["append_prediction_row[]"]
    center -->|"calls"| N_swebench_run_batch_copy_log_if_exists["copy_log_if_exists[]"]
    center -->|"rationale_for"| N_swebench_run_batch_rationale_246["Run the agent container for a single instance.      Returns a [status, instance_"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[Run the agent container for a single instance.      Returns a (status, instance_]] - `rationale_for` [EXTRACTED]
- [[append_prediction_row()]] - `calls` [EXTRACTED]
- [[copy_log_if_exists()]] - `calls` [EXTRACTED]
- [[run-batch.py]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[run_one_instance()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None