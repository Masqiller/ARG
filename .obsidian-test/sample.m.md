---
source_file: "vendor/graphify/tests/fixtures/sample.m"
type: "code"
community: "Community None"
degree: 2
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# sample.m

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 2

## Architecture Graph
```mermaid
graph LR
    center["sample.m"]:::centerNode
    center -->|"contains"| N_fixtures_sample_animal["Animal"]
    center -->|"contains"| N_fixtures_sample_dog["Dog"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[Animal]] - `contains` [EXTRACTED]
- [[Dog]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[sample.m]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None