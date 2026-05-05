---
source_file: "vendor/graphify/graphify/extract.py"
type: "rationale"
community: "Community None"
degree: 1
location: "L4063"
tags:
  - graphify/rationale
  - graphify/EXTRACTED
  - community/Community_None
---

# Worker function for parallel extraction. Runs in a subprocess.      Must be at m

> [!info] Properties
> **File Type**: rationale
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 1

## Architecture Graph
```mermaid
graph LR
    center["Worker function for parallel extraction. Runs in a subprocess.      Must be at m"]:::centerNode
    center -->|"rationale_for"| N_graphify_extract_extract_single_file["_extract_single_file[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[_extract_single_file()]] - `rationale_for` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[Worker function for parallel extraction. Runs in a subprocess.      Must be at m]]
```

#graphify/rationale #graphify/EXTRACTED #community/Community_None