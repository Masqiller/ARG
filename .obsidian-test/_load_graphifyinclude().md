---
source_file: "vendor/graphify/graphify/detect.py"
type: "code"
community: "Community None"
degree: 5
location: "L512"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# _load_graphifyinclude()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 5

## Architecture Graph
```mermaid
graph LR
    center["_load_graphifyinclude[]"]:::centerNode
    center -->|"contains"| N_vendor_graphify_graphify_detect_py["detect.py"]
    center -->|"calls"| N_graphify_detect_parse_gitignore_line["_parse_gitignore_line[]"]
    center -->|"calls"| N_graphify_detect_find_vcs_root["_find_vcs_root[]"]
    center -->|"calls"| N_graphify_detect_detect["detect[]"]
    center -->|"rationale_for"| N_graphify_detect_rationale_513["Read .graphifyinclude allowlist patterns from root and ancestors.      Include p"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[Read .graphifyinclude allowlist patterns from root and ancestors.      Include p]] - `rationale_for` [EXTRACTED]
- [[_find_vcs_root()]] - `calls` [EXTRACTED]
- [[_parse_gitignore_line()]] - `calls` [EXTRACTED]
- [[detect()]] - `calls` [EXTRACTED]
- [[detect.py]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[_load_graphifyinclude()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None