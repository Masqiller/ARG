---
source_file: "vendor/graphify/tests/fixtures/sample.py"
type: "code"
community: "Community None"
degree: 1
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# sample.py

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 1

## Architecture Graph
```mermaid
graph LR
    center["sample.py"]:::centerNode
    center -->|"contains"| N_fixtures_sample_transformer["Transformer"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[Transformer]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[sample.py]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None