---
source_file: "vendor/graphify/tests/fixtures/sample.cs"
type: "code"
community: "Community None"
degree: 3
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# sample.cs

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 3

## Architecture Graph
```mermaid
graph LR
    center["sample.cs"]:::centerNode
    center -->|"contains"| N_fixtures_sample_dataprocessor["DataProcessor"]
    center -->|"contains"| N_fixtures_sample_graphifydemo["GraphifyDemo"]
    center -->|"contains"| N_fixtures_sample_iprocessor["IProcessor"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[DataProcessor]] - `contains` [EXTRACTED]
- [[GraphifyDemo]] - `contains` [EXTRACTED]
- [[IProcessor]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[sample.cs]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None