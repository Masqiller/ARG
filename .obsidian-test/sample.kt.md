---
source_file: "vendor/graphify/tests/fixtures/sample.kt"
type: "code"
community: "Community None"
degree: 3
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# sample.kt

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 3

## Architecture Graph
```mermaid
graph LR
    center["sample.kt"]:::centerNode
    center -->|"contains"| N_fixtures_sample_httpclient["HttpClient"]
    center -->|"contains"| N_fixtures_sample_config["Config"]
    center -->|"contains"| N_fixtures_sample_createclient["createClient[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[Config]] - `contains` [EXTRACTED]
- [[HttpClient]] - `contains` [EXTRACTED]
- [[createClient()]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[sample.kt]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None