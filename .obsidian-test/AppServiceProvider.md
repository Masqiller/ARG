---
source_file: "vendor/graphify/tests/fixtures/sample_php_container.php"
type: "code"
community: "Community None"
degree: 2
location: "L9"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# AppServiceProvider

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 2

## Architecture Graph
```mermaid
graph LR
    center["AppServiceProvider"]:::centerNode
    center -->|"contains"| N_vendor_graphify_tests_fixtures_sample_php_container_php["sample_php_container.php"]
    center -->|"method"| N_fixtures_sample_php_container_appserviceprovider_register[".register[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[.register()]] - `method` [EXTRACTED]
- [[sample_php_container.php]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[AppServiceProvider]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None