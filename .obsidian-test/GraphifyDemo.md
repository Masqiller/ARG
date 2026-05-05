---
source_file: "vendor/graphify/tests/fixtures/sample.cs"
type: "code"
community: "Community None"
degree: 1
location: "L5"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# GraphifyDemo

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 1

## Architecture Graph
```mermaid
graph LR
    center["GraphifyDemo"]:::centerNode
    center -->|"contains"| N_vendor_graphify_tests_fixtures_sample_cs["sample.cs"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[sample.cs]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[GraphifyDemo]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None