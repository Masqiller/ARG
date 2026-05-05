---
source_file: "vendor/graphify/tests/fixtures/sample.F90"
type: "code"
community: "Community None"
degree: 1
location: "L4"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# compute_volume()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 1

## Architecture Graph
```mermaid
graph LR
    center["compute_volume[]"]:::centerNode
    center -->|"defines"| N_fixtures_sample_shapes["shapes"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[shapes]] - `defines` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[compute_volume()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None