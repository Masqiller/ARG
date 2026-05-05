---
source_file: "vendor/graphify/tests/fixtures/sample.kt"
type: "code"
community: "Community None"
degree: 3
location: "L20"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# createClient()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 3

## Architecture Graph
```mermaid
graph LR
    center["createClient[]"]:::centerNode
    center -->|"calls"| N_fixtures_sample_httpclient["HttpClient"]
    center -->|"calls"| N_fixtures_sample_config["Config"]
    center -->|"contains"| N_vendor_graphify_tests_fixtures_sample_kt["sample.kt"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[Config]] - `calls` [EXTRACTED]
- [[HttpClient]] - `calls` [EXTRACTED]
- [[sample.kt]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[createClient()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None