---
source_file: "vendor/graphify/tests/fixtures/sample.m"
type: "code"
community: "Community None"
degree: 3
location: "L4"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# Animal

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 3

## Architecture Graph
```mermaid
graph LR
    center["Animal"]:::centerNode
    center -->|"contains"| N_vendor_graphify_tests_fixtures_sample_m["sample.m"]
    center -->|"method"| N_fixtures_sample_animal_initwithname["-initWithName"]
    center -->|"method"| N_fixtures_sample_animal_speak["-speak"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[-initWithName]] - `method` [EXTRACTED]
- [[-speak]] - `method` [EXTRACTED]
- [[sample.m]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[Animal]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None