---
source_file: "vendor/claude-mem/evals/swebench/run-batch.py"
type: "rationale"
community: "Community None"
degree: 1
location: "L218"
tags:
  - graphify/rationale
  - graphify/EXTRACTED
  - community/Community_None
---

# Append one JSONL prediction row under a lock (appends are NOT atomic across thre

> [!info] Properties
> **File Type**: rationale
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 1

## Architecture Graph
```mermaid
graph LR
    center["Append one JSONL prediction row under a lock [appends are NOT atomic across thre"]:::centerNode
    center -->|"rationale_for"| N_swebench_run_batch_append_prediction_row["append_prediction_row[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[append_prediction_row()]] - `rationale_for` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[Append one JSONL prediction row under a lock (appends are NOT atomic across thre]]
```

#graphify/rationale #graphify/EXTRACTED #community/Community_None