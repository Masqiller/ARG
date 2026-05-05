---
source_file: "vendor/claude-mem/evals/swebench/run-batch.py"
type: "code"
community: "Community None"
degree: 3
location: "L49"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# extract_oauth_credentials()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 3

## Architecture Graph
```mermaid
graph LR
    center["extract_oauth_credentials[]"]:::centerNode
    center -->|"contains"| N_vendor_claude_mem_evals_swebench_run_batch_py["run-batch.py"]
    center -->|"calls"| N_swebench_run_batch_main["main[]"]
    center -->|"rationale_for"| N_swebench_run_batch_rationale_50["Extract Claude Code OAuth credentials [from a Max/Pro subscription] to a     tem"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[Extract Claude Code OAuth credentials (from a MaxPro subscription) to a     tem]] - `rationale_for` [EXTRACTED]
- [[main()_27]] - `calls` [EXTRACTED]
- [[run-batch.py]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[extract_oauth_credentials()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None