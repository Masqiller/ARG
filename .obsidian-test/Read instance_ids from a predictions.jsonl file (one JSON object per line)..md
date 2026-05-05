---
source_file: "vendor/claude-mem/evals/swebench/summarize.py"
type: "rationale"
community: "Community None"
degree: 1
location: "L14"
tags:
  - graphify/rationale
  - graphify/EXTRACTED
  - community/Community_None
---

# Read instance_ids from a predictions.jsonl file (one JSON object per line).

> [!info] Properties
> **File Type**: rationale
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 1

## Architecture Graph
```mermaid
graph LR
    center["Read instance_ids from a predictions.jsonl file [one JSON object per line]."]:::centerNode
    center -->|"rationale_for"| N_swebench_summarize_load_expected_instance_ids["load_expected_instance_ids[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[load_expected_instance_ids()]] - `rationale_for` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[Read instance_ids from a predictions.jsonl file (one JSON object per line).]]
```

#graphify/rationale #graphify/EXTRACTED #community/Community_None