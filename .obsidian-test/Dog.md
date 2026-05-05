---
source_file: "vendor/graphify/tests/fixtures/sample.m"
type: "code"
community: "Community None"
degree: 2
location: "L29"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# Dog

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 2

## Architecture Graph
```mermaid
graph LR
    center["Dog"]:::centerNode
    center -->|"contains"| N_vendor_graphify_tests_fixtures_sample_m["sample.m"]
    center -->|"method"| N_fixtures_sample_dog_fetch["-fetch"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[-fetch]] - `method` [EXTRACTED]
- [[sample.m]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[Dog]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None