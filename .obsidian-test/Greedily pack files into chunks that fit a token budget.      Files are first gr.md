---
source_file: "vendor/graphify/graphify/llm.py"
type: "rationale"
community: "Community None"
degree: 1
location: "L239"
tags:
  - graphify/rationale
  - graphify/EXTRACTED
  - community/Community_None
---

# Greedily pack files into chunks that fit a token budget.      Files are first gr

> [!info] Properties
> **File Type**: rationale
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 1

## Architecture Graph
```mermaid
graph LR
    center["Greedily pack files into chunks that fit a token budget.      Files are first gr"]:::centerNode
    center -->|"rationale_for"| N_graphify_llm_pack_chunks_by_tokens["_pack_chunks_by_tokens[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[_pack_chunks_by_tokens()]] - `rationale_for` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[Greedily pack files into chunks that fit a token budget.      Files are first gr]]
```

#graphify/rationale #graphify/EXTRACTED #community/Community_None