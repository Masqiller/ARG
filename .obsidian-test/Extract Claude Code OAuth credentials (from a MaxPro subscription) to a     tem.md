---
source_file: "vendor/claude-mem/evals/swebench/run-batch.py"
type: "rationale"
community: "Community None"
degree: 1
location: "L50"
tags:
  - graphify/rationale
  - graphify/EXTRACTED
  - community/Community_None
---

# Extract Claude Code OAuth credentials (from a Max/Pro subscription) to a     tem

> [!info] Properties
> **File Type**: rationale
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 1

## Architecture Graph
```mermaid
graph LR
    center["Extract Claude Code OAuth credentials [from a Max/Pro subscription] to a     tem"]:::centerNode
    center -->|"rationale_for"| N_swebench_run_batch_extract_oauth_credentials["extract_oauth_credentials[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[extract_oauth_credentials()]] - `rationale_for` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[Extract Claude Code OAuth credentials (from a MaxPro subscription) to a     tem]]
```

#graphify/rationale #graphify/EXTRACTED #community/Community_None