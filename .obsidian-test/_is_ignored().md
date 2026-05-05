---
source_file: "vendor/graphify/graphify/detect.py"
type: "code"
community: "Community None"
degree: 4
location: "L455"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# _is_ignored()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 4

## Architecture Graph
```mermaid
graph LR
    center["_is_ignored[]"]:::centerNode
    center -->|"contains"| N_vendor_graphify_graphify_detect_py["detect.py"]
    center -->|"calls"| N_str["str"]
    center -->|"calls"| N_graphify_detect_detect["detect[]"]
    center -->|"rationale_for"| N_graphify_detect_rationale_456["Return True if the path should be ignored per .graphifyignore patterns.      Use"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[Return True if the path should be ignored per .graphifyignore patterns.      Use]] - `rationale_for` [EXTRACTED]
- [[detect()]] - `calls` [EXTRACTED]
- [[detect.py]] - `contains` [EXTRACTED]
- [[str]] - `calls` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[_is_ignored()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None