---
source_file: "vendor/graphify/tests/fixtures/sample.m"
type: "code"
community: "Community None"
degree: 1
location: "L9"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# -speak

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 1

## Architecture Graph
```mermaid
graph LR
    center["-speak"]:::centerNode
    center -->|"method"| N_fixtures_sample_animal["Animal"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[Animal]] - `method` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[-speak]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None