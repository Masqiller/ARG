---
source_file: "vendor/graphify/tests/fixtures/sample.scala"
type: "code"
community: "Community None"
degree: 2
location: "L19"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# HttpClientFactory

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 2

## Architecture Graph
```mermaid
graph LR
    center["HttpClientFactory"]:::centerNode
    center -->|"contains"| N_vendor_graphify_tests_fixtures_sample_scala["sample.scala"]
    center -->|"method"| N_fixtures_sample_httpclientfactory_create[".create[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[.create()]] - `method` [EXTRACTED]
- [[sample.scala]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[HttpClientFactory]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None