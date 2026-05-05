---
source_file: "vendor/graphify/tests/fixtures/sample.cpp"
type: "code"
community: "Community None"
degree: 10
location: "L5"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# HttpClient

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 10

## Architecture Graph
```mermaid
graph LR
    center["HttpClient"]:::centerNode
    center -->|"contains"| N_vendor_graphify_tests_fixtures_sample_ts["sample.ts"]
    center -->|"method"| N_fixtures_sample_httpclient_constructor[".constructor[]"]
    center -->|"method"| N_fixtures_sample_httpclient_get[".get[]"]
    center -->|"method"| N_fixtures_sample_httpclient_post[".post[]"]
    center -->|"contains"| N_vendor_graphify_tests_fixtures_sample_scala["sample.scala"]
    center -->|"method"| N_fixtures_sample_httpclient_buildrequest[".buildRequest[]"]
    center -->|"contains"| N_vendor_graphify_tests_fixtures_sample_kt["sample.kt"]
    center -->|"calls"| N_fixtures_sample_createclient["createClient[]"]
    center -->|"contains"| N_vendor_graphify_tests_fixtures_sample_cpp["sample.cpp"]
    center -->|"method"| N_fixtures_sample_httpclient_httpclient[".HttpClient[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[.HttpClient()]] - `method` [EXTRACTED]
- [[.buildRequest()]] - `method` [EXTRACTED]
- [[.constructor()]] - `method` [EXTRACTED]
- [[.get()_1]] - `method` [EXTRACTED]
- [[.post()_1]] - `method` [EXTRACTED]
- [[createClient()]] - `calls` [EXTRACTED]
- [[sample.cpp]] - `contains` [EXTRACTED]
- [[sample.kt]] - `contains` [EXTRACTED]
- [[sample.scala]] - `contains` [EXTRACTED]
- [[sample.ts]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[HttpClient]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None