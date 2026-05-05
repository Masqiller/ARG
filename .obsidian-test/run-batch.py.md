---
source_file: "vendor/claude-mem/evals/swebench/run-batch.py"
type: "code"
community: "Community None"
degree: 7
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# run-batch.py

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 7

## Architecture Graph
```mermaid
graph LR
    center["run-batch.py"]:::centerNode
    center -->|"contains"| N_swebench_run_batch_extract_oauth_credentials["extract_oauth_credentials[]"]
    center -->|"contains"| N_swebench_run_batch_parse_args["parse_args[]"]
    center -->|"contains"| N_swebench_run_batch_select_instances["select_instances[]"]
    center -->|"contains"| N_swebench_run_batch_append_prediction_row["append_prediction_row[]"]
    center -->|"contains"| N_swebench_run_batch_copy_log_if_exists["copy_log_if_exists[]"]
    center -->|"contains"| N_swebench_run_batch_run_one_instance["run_one_instance[]"]
    center -->|"contains"| N_swebench_run_batch_main["main[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[append_prediction_row()]] - `contains` [EXTRACTED]
- [[copy_log_if_exists()]] - `contains` [EXTRACTED]
- [[extract_oauth_credentials()]] - `contains` [EXTRACTED]
- [[main()_27]] - `contains` [EXTRACTED]
- [[parse_args()]] - `contains` [EXTRACTED]
- [[run_one_instance()]] - `contains` [EXTRACTED]
- [[select_instances()]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[run-batch.py]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None