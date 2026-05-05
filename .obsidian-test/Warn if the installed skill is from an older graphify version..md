---
source_file: "vendor/graphify/graphify/__main__.py"
type: "rationale"
community: "Community None"
degree: 1
location: "L23"
tags:
  - graphify/rationale
  - graphify/EXTRACTED
  - community/Community_None
---

# Warn if the installed skill is from an older graphify version.

> [!info] Properties
> **File Type**: rationale
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 1

## Architecture Graph
```mermaid
graph LR
    center["Warn if the installed skill is from an older graphify version."]:::centerNode
    center -->|"rationale_for"| N_graphify_main_check_skill_version["_check_skill_version[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[_check_skill_version()]] - `rationale_for` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[Warn if the installed skill is from an older graphify version.]]
```

#graphify/rationale #graphify/EXTRACTED #community/Community_None