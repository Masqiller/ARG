---
source_file: "vendor/graphify/graphify/detect.py"
type: "rationale"
community: "Community None"
degree: 1
location: "L370"
tags:
  - graphify/rationale
  - graphify/EXTRACTED
  - community/Community_None
---

# Return True if this directory name looks like a venv, cache, or dep dir.

> [!info] Properties
> **File Type**: rationale
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 1

## Architecture Graph
```mermaid
graph LR
    center["Return True if this directory name looks like a venv, cache, or dep dir."]:::centerNode
    center -->|"rationale_for"| N_graphify_detect_is_noise_dir["_is_noise_dir[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[_is_noise_dir()]] - `rationale_for` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[Return True if this directory name looks like a venv, cache, or dep dir.]]
```

#graphify/rationale #graphify/EXTRACTED #community/Community_None