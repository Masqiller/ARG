---
source_file: "vendor/claude-mem/evals/swebench/run-batch.py"
type: "rationale"
community: "Community None"
degree: 1
location: "L195"
tags:
  - graphify/rationale
  - graphify/EXTRACTED
  - community/Community_None
---

# Filter dataset rows by instance_ids (if given) and apply limit.

> [!info] Properties
> **File Type**: rationale
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 1

## Architecture Graph
```mermaid
graph LR
    center["Filter dataset rows by instance_ids [if given] and apply limit."]:::centerNode
    center -->|"rationale_for"| N_swebench_run_batch_select_instances["select_instances[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[select_instances()]] - `rationale_for` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[Filter dataset rows by instance_ids (if given) and apply limit.]]
```

#graphify/rationale #graphify/EXTRACTED #community/Community_None