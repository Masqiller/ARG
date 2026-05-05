---
source_file: "vendor/graphify/graphify/detect.py"
type: "code"
community: "Community None"
degree: 3
location: "L61"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# _is_sensitive()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 3

## Architecture Graph
```mermaid
graph LR
    center["_is_sensitive[]"]:::centerNode
    center -->|"contains"| N_vendor_graphify_graphify_detect_py["detect.py"]
    center -->|"calls"| N_graphify_detect_detect["detect[]"]
    center -->|"rationale_for"| N_graphify_detect_rationale_62["Return True if this file likely contains secrets and should be skipped."]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[Return True if this file likely contains secrets and should be skipped.]] - `rationale_for` [EXTRACTED]
- [[detect()]] - `calls` [EXTRACTED]
- [[detect.py]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[_is_sensitive()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None