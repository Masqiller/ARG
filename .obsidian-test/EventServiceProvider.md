---
source_file: "vendor/graphify/tests/fixtures/sample_php_listen.php"
type: "code"
community: "Community None"
degree: 1
location: "L11"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# EventServiceProvider

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 1

## Architecture Graph
```mermaid
graph LR
    center["EventServiceProvider"]:::centerNode
    center -->|"contains"| N_vendor_graphify_tests_fixtures_sample_php_listen_php["sample_php_listen.php"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[sample_php_listen.php]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[EventServiceProvider]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None