---
source_file: "vendor/graphify/graphify/llm.py"
type: "rationale"
community: "Community None"
degree: 1
location: "L187"
tags:
  - graphify/rationale
  - graphify/EXTRACTED
  - community/Community_None
---

# Extract semantic nodes/edges from a list of files using the given backend.

> [!info] Properties
> **File Type**: rationale
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 1

## Architecture Graph
```mermaid
graph LR
    center["Extract semantic nodes/edges from a list of files using the given backend."]:::centerNode
    center -->|"rationale_for"| N_graphify_llm_extract_files_direct["extract_files_direct[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[extract_files_direct()]] - `rationale_for` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[Extract semantic nodesedges from a list of files using the given backend.]]
```

#graphify/rationale #graphify/EXTRACTED #community/Community_None