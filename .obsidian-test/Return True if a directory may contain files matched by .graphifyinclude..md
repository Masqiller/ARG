---
source_file: "vendor/graphify/graphify/detect.py"
type: "rationale"
community: "Community None"
degree: 1
location: "L590"
tags:
  - graphify/rationale
  - graphify/EXTRACTED
  - community/Community_None
---

# Return True if a directory may contain files matched by .graphifyinclude.

> [!info] Properties
> **File Type**: rationale
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 1

## Architecture Graph
```mermaid
graph LR
    center["Return True if a directory may contain files matched by .graphifyinclude."]:::centerNode
    center -->|"rationale_for"| N_graphify_detect_could_contain_included_path["_could_contain_included_path[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[_could_contain_included_path()]] - `rationale_for` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[Return True if a directory may contain files matched by .graphifyinclude.]]
```

#graphify/rationale #graphify/EXTRACTED #community/Community_None