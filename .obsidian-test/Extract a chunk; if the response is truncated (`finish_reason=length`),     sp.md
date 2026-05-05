---
source_file: "vendor/graphify/graphify/llm.py"
type: "rationale"
community: "Community None"
degree: 1
location: "L284"
tags:
  - graphify/rationale
  - graphify/EXTRACTED
  - community/Community_None
---

# Extract a chunk; if the response is truncated (`finish_reason="length"`),     sp

> [!info] Properties
> **File Type**: rationale
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 1

## Architecture Graph
```mermaid
graph LR
    center["Extract a chunk; if the response is truncated [`finish_reason=\"length\"`],     sp"]:::centerNode
    center -->|"rationale_for"| N_graphify_llm_extract_with_adaptive_retry["_extract_with_adaptive_retry[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[_extract_with_adaptive_retry()]] - `rationale_for` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[Extract a chunk; if the response is truncated (`finish_reason=length`),     sp]]
```

#graphify/rationale #graphify/EXTRACTED #community/Community_None