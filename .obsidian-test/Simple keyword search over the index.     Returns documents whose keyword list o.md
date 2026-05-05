---
source_file: "vendor/graphify/worked/example/raw/api.py"
type: "rationale"
community: "Community None"
degree: 1
location: "L49"
tags:
  - graphify/rationale
  - graphify/EXTRACTED
  - community/Community_None
---

# Simple keyword search over the index.     Returns documents whose keyword list o

> [!info] Properties
> **File Type**: rationale
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 1

## Architecture Graph
```mermaid
graph LR
    center["Simple keyword search over the index.     Returns documents whose keyword list o"]:::centerNode
    center -->|"rationale_for"| N_raw_api_handle_search["handle_search[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[handle_search()]] - `rationale_for` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[Simple keyword search over the index.     Returns documents whose keyword list o]]
```

#graphify/rationale #graphify/EXTRACTED #community/Community_None