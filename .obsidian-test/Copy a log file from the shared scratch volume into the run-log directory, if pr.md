---
source_file: "vendor/claude-mem/evals/swebench/run-batch.py"
type: "rationale"
community: "Community None"
degree: 1
location: "L230"
tags:
  - graphify/rationale
  - graphify/EXTRACTED
  - community/Community_None
---

# Copy a log file from the shared scratch volume into the run-log directory, if pr

> [!info] Properties
> **File Type**: rationale
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 1

## Architecture Graph
```mermaid
graph LR
    center["Copy a log file from the shared scratch volume into the run-log directory, if pr"]:::centerNode
    center -->|"rationale_for"| N_swebench_run_batch_copy_log_if_exists["copy_log_if_exists[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[copy_log_if_exists()]] - `rationale_for` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[Copy a log file from the shared scratch volume into the run-log directory, if pr]]
```

#graphify/rationale #graphify/EXTRACTED #community/Community_None