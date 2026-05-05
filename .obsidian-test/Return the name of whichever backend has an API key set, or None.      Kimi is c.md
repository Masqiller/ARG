---
source_file: "vendor/graphify/graphify/llm.py"
type: "rationale"
community: "Community None"
degree: 1
location: "L469"
tags:
  - graphify/rationale
  - graphify/EXTRACTED
  - community/Community_None
---

# Return the name of whichever backend has an API key set, or None.      Kimi is c

> [!info] Properties
> **File Type**: rationale
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 1

## Architecture Graph
```mermaid
graph LR
    center["Return the name of whichever backend has an API key set, or None.      Kimi is c"]:::centerNode
    center -->|"rationale_for"| N_graphify_llm_detect_backend["detect_backend[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[detect_backend()]] - `rationale_for` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[Return the name of whichever backend has an API key set, or None.      Kimi is c]]
```

#graphify/rationale #graphify/EXTRACTED #community/Community_None