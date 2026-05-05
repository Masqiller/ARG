---
source_file: "vendor/graphify/graphify/detect.py"
type: "code"
community: "Community None"
degree: 4
location: "L760"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# save_manifest()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 4

## Architecture Graph
```mermaid
graph LR
    center["save_manifest[]"]:::centerNode
    center -->|"calls"| N_graphify_watch_rebuild_code["_rebuild_code[]"]
    center -->|"contains"| N_vendor_graphify_graphify_detect_py["detect.py"]
    center -->|"calls"| N_graphify_detect_md5_file["_md5_file[]"]
    center -->|"rationale_for"| N_graphify_detect_rationale_761["Save current file mtimes + content hashes for change detection on --update."]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[Save current file mtimes + content hashes for change detection on --update.]] - `rationale_for` [EXTRACTED]
- [[_md5_file()]] - `calls` [EXTRACTED]
- [[_rebuild_code()]] - `calls` [INFERRED]
- [[detect.py]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[save_manifest()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None