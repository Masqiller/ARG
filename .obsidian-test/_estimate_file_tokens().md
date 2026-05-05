---
source_file: "vendor/graphify/graphify/llm.py"
type: "code"
community: "Community None"
degree: 3
location: "L211"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# _estimate_file_tokens()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 3

## Architecture Graph
```mermaid
graph LR
    center["_estimate_file_tokens[]"]:::centerNode
    center -->|"contains"| N_vendor_graphify_graphify_llm_py["llm.py"]
    center -->|"calls"| N_graphify_llm_pack_chunks_by_tokens["_pack_chunks_by_tokens[]"]
    center -->|"rationale_for"| N_graphify_llm_rationale_212["Estimate the prompt-token cost of a single file under `_read_files` rules."]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[Estimate the prompt-token cost of a single file under `_read_files` rules.]] - `rationale_for` [EXTRACTED]
- [[_pack_chunks_by_tokens()]] - `calls` [EXTRACTED]
- [[llm.py]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[_estimate_file_tokens()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None