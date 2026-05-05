---
source_file: "vendor/claude-mem/evals/swebench/run-batch.py"
type: "code"
community: "Community None"
degree: 5
location: "L378"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# main()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 5

## Architecture Graph
```mermaid
graph LR
    center["main[]"]:::centerNode
    center -->|"contains"| N_vendor_claude_mem_evals_swebench_run_batch_py["run-batch.py"]
    center -->|"calls"| N_swebench_run_batch_extract_oauth_credentials["extract_oauth_credentials[]"]
    center -->|"calls"| N_swebench_run_batch_parse_args["parse_args[]"]
    center -->|"calls"| N_swebench_run_batch_select_instances["select_instances[]"]
    center -->|"calls"| N_swebench_run_batch_append_prediction_row["append_prediction_row[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[append_prediction_row()]] - `calls` [EXTRACTED]
- [[extract_oauth_credentials()]] - `calls` [EXTRACTED]
- [[parse_args()]] - `calls` [EXTRACTED]
- [[run-batch.py]] - `contains` [EXTRACTED]
- [[select_instances()]] - `calls` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[main()_27]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None