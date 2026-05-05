---
source_file: "vendor/graphify/graphify/wiki.py"
type: "code"
community: "Community None"
degree: 3
location: "L9"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# _safe_filename()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 3

## Architecture Graph
```mermaid
graph LR
    center["_safe_filename[]"]:::centerNode
    center -->|"contains"| N_vendor_graphify_graphify_wiki_py["wiki.py"]
    center -->|"calls"| N_graphify_wiki_to_wiki["to_wiki[]"]
    center -->|"rationale_for"| N_graphify_wiki_rationale_10["Make a label safe for use as a filename across platforms.      Substitutes chara"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[Make a label safe for use as a filename across platforms.      Substitutes chara]] - `rationale_for` [EXTRACTED]
- [[to_wiki()]] - `calls` [EXTRACTED]
- [[wiki.py]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[_safe_filename()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None