---
source_file: "vendor/graphify/tests/fixtures/sample.swift"
type: "code"
community: "Community None"
degree: 7
location: "L32"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# Config

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 7

## Architecture Graph
```mermaid
graph LR
    center["Config"]:::centerNode
    center -->|"contains"| N_vendor_graphify_tests_fixtures_sample_scala["sample.scala"]
    center -->|"calls"| N_fixtures_sample_httpclientfactory_create[".create[]"]
    center -->|"contains"| N_vendor_graphify_tests_fixtures_sample_kt["sample.kt"]
    center -->|"calls"| N_fixtures_sample_createclient["createClient[]"]
    center -->|"contains"| N_vendor_graphify_tests_fixtures_sample_swift["sample.swift"]
    center -->|"method"| N_fixtures_sample_config_subscript[".subscript[]"]
    center -->|"method"| N_fixtures_sample_config_isvalid[".isValid[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[.create()]] - `calls` [EXTRACTED]
- [[.isValid()]] - `method` [EXTRACTED]
- [[.subscript()]] - `method` [EXTRACTED]
- [[createClient()]] - `calls` [EXTRACTED]
- [[sample.kt]] - `contains` [EXTRACTED]
- [[sample.scala]] - `contains` [EXTRACTED]
- [[sample.swift]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[Config]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None