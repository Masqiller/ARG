---
source_file: "vendor/graphify/graphify/extract.py"
type: "rationale"
community: "Community None"
degree: 1
location: "L4142"
tags:
  - graphify/rationale
  - graphify/EXTRACTED
  - community/Community_None
---

# Extract uncached files sequentially (fallback for small batches).

> [!info] Properties
> **File Type**: rationale
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 1

## Architecture Graph
```mermaid
graph LR
    center["Extract uncached files sequentially [fallback for small batches]."]:::centerNode
    center -->|"rationale_for"| N_graphify_extract_extract_sequential["_extract_sequential[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[_extract_sequential()]] - `rationale_for` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[Extract uncached files sequentially (fallback for small batches).]]
```

#graphify/rationale #graphify/EXTRACTED #community/Community_None