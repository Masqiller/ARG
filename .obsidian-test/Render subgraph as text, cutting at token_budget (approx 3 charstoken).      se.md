---
source_file: "vendor/graphify/graphify/serve.py"
type: "rationale"
community: "Community None"
degree: 1
location: "L161"
tags:
  - graphify/rationale
  - graphify/EXTRACTED
  - community/Community_None
---

# Render subgraph as text, cutting at token_budget (approx 3 chars/token).      se

> [!info] Properties
> **File Type**: rationale
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 1

## Architecture Graph
```mermaid
graph LR
    center["Render subgraph as text, cutting at token_budget [approx 3 chars/token].      se"]:::centerNode
    center -->|"rationale_for"| N_graphify_serve_subgraph_to_text["_subgraph_to_text[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[_subgraph_to_text()]] - `rationale_for` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[Render subgraph as text, cutting at token_budget (approx 3 charstoken).      se]]
```

#graphify/rationale #graphify/EXTRACTED #community/Community_None