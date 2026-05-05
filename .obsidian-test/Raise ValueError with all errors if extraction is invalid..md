---
source_file: "vendor/graphify/graphify/validate.py"
type: "rationale"
community: "Community None"
degree: 1
location: "L68"
tags:
  - graphify/rationale
  - graphify/EXTRACTED
  - community/Community_None
---

# Raise ValueError with all errors if extraction is invalid.

> [!info] Properties
> **File Type**: rationale
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 1

## Architecture Graph
```mermaid
graph LR
    center["Raise ValueError with all errors if extraction is invalid."]:::centerNode
    center -->|"rationale_for"| N_graphify_validate_assert_valid["assert_valid[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[assert_valid()]] - `rationale_for` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[Raise ValueError with all errors if extraction is invalid.]]
```

#graphify/rationale #graphify/EXTRACTED #community/Community_None