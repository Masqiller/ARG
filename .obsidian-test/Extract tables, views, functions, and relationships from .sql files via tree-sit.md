---
source_file: "vendor/graphify/graphify/extract.py"
type: "rationale"
community: "Community None"
degree: 1
location: "L2058"
tags:
  - graphify/rationale
  - graphify/EXTRACTED
  - community/Community_None
---

# Extract tables, views, functions, and relationships from .sql files via tree-sit

> [!info] Properties
> **File Type**: rationale
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 1

## Architecture Graph
```mermaid
graph LR
    center["Extract tables, views, functions, and relationships from .sql files via tree-sit"]:::centerNode
    center -->|"rationale_for"| N_graphify_extract_extract_sql["extract_sql[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[extract_sql()]] - `rationale_for` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[Extract tables, views, functions, and relationships from .sql files via tree-sit]]
```

#graphify/rationale #graphify/EXTRACTED #community/Community_None