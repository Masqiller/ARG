---
source_file: "vendor/graphify/tests/fixtures/sample.cs"
type: "code"
community: "Community None"
degree: 3
location: "L7"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# IProcessor

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 3

## Architecture Graph
```mermaid
graph LR
    center["IProcessor"]:::centerNode
    center -->|"inherits"| N_fixtures_sample_dataprocessor["DataProcessor"]
    center -->|"contains"| N_vendor_graphify_tests_fixtures_sample_cs["sample.cs"]
    center -->|"method"| N_fixtures_sample_iprocessor_process[".Process[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[.Process()_1]] - `method` [EXTRACTED]
- [[DataProcessor]] - `inherits` [EXTRACTED]
- [[sample.cs]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[IProcessor]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None