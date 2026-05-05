---
source_file: "vendor/graphify/tests/fixtures/sample.c"
type: "code"
community: "Community None"
degree: 3
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# sample.c

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 3

## Architecture Graph
```mermaid
graph LR
    center["sample.c"]:::centerNode
    center -->|"contains"| N_fixtures_sample_validate["validate[]"]
    center -->|"contains"| N_fixtures_sample_process["process[]"]
    center -->|"contains"| N_fixtures_sample_main["main[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[main()_1]] - `contains` [EXTRACTED]
- [[process()]] - `contains` [EXTRACTED]
- [[validate()]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[sample.c]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None