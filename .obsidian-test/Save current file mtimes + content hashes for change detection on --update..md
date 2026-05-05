---
source_file: "vendor/graphify/graphify/detect.py"
type: "rationale"
community: "Community None"
degree: 1
location: "L761"
tags:
  - graphify/rationale
  - graphify/EXTRACTED
  - community/Community_None
---

# Save current file mtimes + content hashes for change detection on --update.

> [!info] Properties
> **File Type**: rationale
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 1

## Architecture Graph
```mermaid
graph LR
    center["Save current file mtimes + content hashes for change detection on --update."]:::centerNode
    center -->|"rationale_for"| N_graphify_detect_save_manifest["save_manifest[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[save_manifest()]] - `rationale_for` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[Save current file mtimes + content hashes for change detection on --update.]]
```

#graphify/rationale #graphify/EXTRACTED #community/Community_None