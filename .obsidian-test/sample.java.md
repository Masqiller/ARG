---
source_file: "vendor/graphify/tests/fixtures/sample.java"
type: "code"
community: "Community None"
degree: 2
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# sample.java

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 2

## Architecture Graph
```mermaid
graph LR
    center["sample.java"]:::centerNode
    center -->|"contains"| N_fixtures_sample_dataprocessor["DataProcessor"]
    center -->|"contains"| N_fixtures_sample_processor["Processor"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[DataProcessor]] - `contains` [EXTRACTED]
- [[Processor]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[sample.java]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None