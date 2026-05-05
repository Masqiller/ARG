---
source_file: "vendor/claude-mem/evals/swebench/run-batch.py"
type: "code"
community: "Community None"
degree: 3
location: "L229"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# copy_log_if_exists()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 3

## Architecture Graph
```mermaid
graph LR
    center["copy_log_if_exists[]"]:::centerNode
    center -->|"contains"| N_vendor_claude_mem_evals_swebench_run_batch_py["run-batch.py"]
    center -->|"calls"| N_swebench_run_batch_run_one_instance["run_one_instance[]"]
    center -->|"rationale_for"| N_swebench_run_batch_rationale_230["Copy a log file from the shared scratch volume into the run-log directory, if pr"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[Copy a log file from the shared scratch volume into the run-log directory, if pr]] - `rationale_for` [EXTRACTED]
- [[run-batch.py]] - `contains` [EXTRACTED]
- [[run_one_instance()]] - `calls` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[copy_log_if_exists()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None