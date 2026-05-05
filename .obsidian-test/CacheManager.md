---
source_file: "vendor/graphify/tests/fixtures/sample.swift"
type: "code"
community: "Community None"
degree: 2
location: "L51"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# CacheManager

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 2

## Architecture Graph
```mermaid
graph LR
    center["CacheManager"]:::centerNode
    center -->|"contains"| N_vendor_graphify_tests_fixtures_sample_swift["sample.swift"]
    center -->|"method"| N_fixtures_sample_cachemanager_get[".get[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[.get()_2]] - `method` [EXTRACTED]
- [[sample.swift]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[CacheManager]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None