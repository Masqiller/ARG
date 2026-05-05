---
source_file: "vendor/graphify/tests/fixtures/sample.go"
type: "code"
community: "Community None"
degree: 2
location: "L12"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# NewServer()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 2

## Architecture Graph
```mermaid
graph LR
    center["NewServer[]"]:::centerNode
    center -->|"calls"| N_fixtures_sample_main["main[]"]
    center -->|"contains"| N_vendor_graphify_tests_fixtures_sample_go["sample.go"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[main()_1]] - `calls` [EXTRACTED]
- [[sample.go]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[NewServer()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None