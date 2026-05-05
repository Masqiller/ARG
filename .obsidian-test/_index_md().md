---
source_file: "vendor/graphify/graphify/wiki.py"
type: "code"
community: "Community None"
degree: 2
location: "L139"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# _index_md()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 2

## Architecture Graph
```mermaid
graph LR
    center["_index_md[]"]:::centerNode
    center -->|"contains"| N_vendor_graphify_graphify_wiki_py["wiki.py"]
    center -->|"calls"| N_graphify_wiki_to_wiki["to_wiki[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[to_wiki()]] - `calls` [EXTRACTED]
- [[wiki.py]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[_index_md()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None