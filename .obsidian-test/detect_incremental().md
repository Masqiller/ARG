---
source_file: "vendor/graphify/graphify/detect.py"
type: "code"
community: "Community None"
degree: 5
location: "L774"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# detect_incremental()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 5

## Architecture Graph
```mermaid
graph LR
    center["detect_incremental[]"]:::centerNode
    center -->|"contains"| N_vendor_graphify_graphify_detect_py["detect.py"]
    center -->|"calls"| N_graphify_detect_detect["detect[]"]
    center -->|"calls"| N_graphify_detect_md5_file["_md5_file[]"]
    center -->|"calls"| N_graphify_detect_load_manifest["load_manifest[]"]
    center -->|"rationale_for"| N_graphify_detect_rationale_775["Like detect[], but returns only new or modified files since the last run.      F"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[Like detect(), but returns only new or modified files since the last run.      F]] - `rationale_for` [EXTRACTED]
- [[_md5_file()]] - `calls` [EXTRACTED]
- [[detect()]] - `calls` [EXTRACTED]
- [[detect.py]] - `contains` [EXTRACTED]
- [[load_manifest()]] - `calls` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[detect_incremental()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None