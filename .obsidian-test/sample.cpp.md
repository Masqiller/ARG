---
source_file: "vendor/graphify/tests/fixtures/sample.cpp"
type: "code"
community: "Community None"
degree: 2
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# sample.cpp

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 2

## Architecture Graph
```mermaid
graph LR
    center["sample.cpp"]:::centerNode
    center -->|"contains"| N_fixtures_sample_main["main[]"]
    center -->|"contains"| N_fixtures_sample_httpclient["HttpClient"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[HttpClient]] - `contains` [EXTRACTED]
- [[main()_1]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[sample.cpp]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None