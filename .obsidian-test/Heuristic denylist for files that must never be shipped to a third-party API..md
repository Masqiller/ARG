---
source_file: "vendor/external_plugins/caveman/skills/compress/scripts/compress.py"
type: "rationale"
community: "Community None"
degree: 1
location: "L47"
tags:
  - graphify/rationale
  - graphify/EXTRACTED
  - community/Community_None
---

# Heuristic denylist for files that must never be shipped to a third-party API.

> [!info] Properties
> **File Type**: rationale
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 1

## Architecture Graph
```mermaid
graph LR
    center["Heuristic denylist for files that must never be shipped to a third-party API."]:::centerNode
    center -->|"rationale_for"| N_scripts_compress_is_sensitive_path["is_sensitive_path[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[is_sensitive_path()]] - `rationale_for` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[Heuristic denylist for files that must never be shipped to a third-party API.]]
```

#graphify/rationale #graphify/EXTRACTED #community/Community_None