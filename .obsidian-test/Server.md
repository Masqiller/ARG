---
source_file: "vendor/graphify/tests/fixtures/sample.go"
type: "code"
community: "Community None"
degree: 3
location: "L8"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# Server

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 3

## Architecture Graph
```mermaid
graph LR
    center["Server"]:::centerNode
    center -->|"contains"| N_vendor_graphify_tests_fixtures_sample_go["sample.go"]
    center -->|"method"| N_fixtures_server_start[".Start[]"]
    center -->|"method"| N_fixtures_server_stop[".Stop[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[.Start()]] - `method` [EXTRACTED]
- [[.Stop()]] - `method` [EXTRACTED]
- [[sample.go]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[Server]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None