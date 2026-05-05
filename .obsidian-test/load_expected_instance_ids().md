---
source_file: "vendor/claude-mem/evals/swebench/summarize.py"
type: "code"
community: "Community None"
degree: 3
location: "L13"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# load_expected_instance_ids()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 3

## Architecture Graph
```mermaid
graph LR
    center["load_expected_instance_ids[]"]:::centerNode
    center -->|"contains"| N_vendor_claude_mem_evals_swebench_summarize_py["summarize.py"]
    center -->|"calls"| N_swebench_summarize_main["main[]"]
    center -->|"rationale_for"| N_swebench_summarize_rationale_14["Read instance_ids from a predictions.jsonl file [one JSON object per line]."]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[Read instance_ids from a predictions.jsonl file (one JSON object per line).]] - `rationale_for` [EXTRACTED]
- [[main()_26]] - `calls` [EXTRACTED]
- [[summarize.py]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[load_expected_instance_ids()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None