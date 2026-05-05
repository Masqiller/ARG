---
source_file: "vendor/graphify/graphify/llm.py"
type: "code"
community: "Community None"
degree: 2
location: "L468"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# detect_backend()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 2

## Architecture Graph
```mermaid
graph LR
    center["detect_backend[]"]:::centerNode
    center -->|"contains"| N_vendor_graphify_graphify_llm_py["llm.py"]
    center -->|"rationale_for"| N_graphify_llm_rationale_469["Return the name of whichever backend has an API key set, or None.      Kimi is c"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[Return the name of whichever backend has an API key set, or None.      Kimi is c]] - `rationale_for` [EXTRACTED]
- [[llm.py]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[detect_backend()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None