---
source_file: "vendor/graphify/tests/fixtures/sample.swift"
type: "code"
community: "Community None"
degree: 7
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# sample.swift

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 7

## Architecture Graph
```mermaid
graph LR
    center["sample.swift"]:::centerNode
    center -->|"contains"| N_fixtures_sample_dataprocessor["DataProcessor"]
    center -->|"contains"| N_fixtures_sample_processor["Processor"]
    center -->|"contains"| N_fixtures_sample_config["Config"]
    center -->|"contains"| N_fixtures_sample_loggable["Loggable"]
    center -->|"contains"| N_fixtures_sample_networkerror["NetworkError"]
    center -->|"contains"| N_fixtures_sample_cachemanager["CacheManager"]
    center -->|"contains"| N_fixtures_sample_createprocessor["createProcessor[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[CacheManager]] - `contains` [EXTRACTED]
- [[Config]] - `contains` [EXTRACTED]
- [[DataProcessor]] - `contains` [EXTRACTED]
- [[Loggable]] - `contains` [EXTRACTED]
- [[NetworkError]] - `contains` [EXTRACTED]
- [[Processor]] - `contains` [EXTRACTED]
- [[createProcessor()]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[sample.swift]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None