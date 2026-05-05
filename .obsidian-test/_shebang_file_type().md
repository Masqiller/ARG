---
source_file: "vendor/graphify/graphify/detect.py"
type: "code"
community: "Community None"
degree: 3
location: "L89"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# _shebang_file_type()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 3

## Architecture Graph
```mermaid
graph LR
    center["_shebang_file_type[]"]:::centerNode
    center -->|"contains"| N_vendor_graphify_graphify_detect_py["detect.py"]
    center -->|"calls"| N_graphify_detect_classify_file["classify_file[]"]
    center -->|"rationale_for"| N_graphify_detect_rationale_90["Peek at the first line of an extensionless file for a shebang."]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[Peek at the first line of an extensionless file for a shebang.]] - `rationale_for` [EXTRACTED]
- [[classify_file()]] - `calls` [EXTRACTED]
- [[detect.py]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[_shebang_file_type()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None