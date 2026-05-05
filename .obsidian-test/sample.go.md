---
source_file: "vendor/graphify/tests/fixtures/sample.go"
type: "code"
community: "Community None"
degree: 3
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# sample.go

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 3

## Architecture Graph
```mermaid
graph LR
    center["sample.go"]:::centerNode
    center -->|"contains"| N_fixtures_sample_main["main[]"]
    center -->|"contains"| N_fixtures_server["Server"]
    center -->|"contains"| N_fixtures_sample_newserver["NewServer[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[NewServer()]] - `contains` [EXTRACTED]
- [[Server]] - `contains` [EXTRACTED]
- [[main()_1]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[sample.go]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None