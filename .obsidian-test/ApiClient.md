---
source_file: "vendor/graphify/tests/fixtures/sample.php"
type: "code"
community: "Community None"
degree: 7
location: "L8"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# ApiClient

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 7

## Architecture Graph
```mermaid
graph LR
    center["ApiClient"]:::centerNode
    center -->|"contains"| N_vendor_graphify_tests_fixtures_sample_rb["sample.rb"]
    center -->|"method"| N_fixtures_sample_apiclient_initialize[".initialize[]"]
    center -->|"method"| N_fixtures_sample_apiclient_get[".get[]"]
    center -->|"method"| N_fixtures_sample_apiclient_post[".post[]"]
    center -->|"method"| N_fixtures_sample_apiclient_fetch[".fetch[]"]
    center -->|"contains"| N_vendor_graphify_tests_fixtures_sample_php["sample.php"]
    center -->|"method"| N_fixtures_sample_apiclient_construct[".__construct[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[.__construct()]] - `method` [EXTRACTED]
- [[.fetch()]] - `method` [EXTRACTED]
- [[.get()]] - `method` [EXTRACTED]
- [[.initialize()]] - `method` [EXTRACTED]
- [[.post()]] - `method` [EXTRACTED]
- [[sample.php]] - `contains` [EXTRACTED]
- [[sample.rb]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[ApiClient]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None