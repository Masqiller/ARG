---
source_file: "vendor/graphify/tests/fixtures/sample.swift"
type: "code"
community: "Community None"
degree: 2
location: "L8"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# Loggable

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 2

## Architecture Graph
```mermaid
graph LR
    center["Loggable"]:::centerNode
    center -->|"inherits"| N_fixtures_sample_dataprocessor["DataProcessor"]
    center -->|"contains"| N_vendor_graphify_tests_fixtures_sample_swift["sample.swift"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[DataProcessor]] - `inherits` [EXTRACTED]
- [[sample.swift]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[Loggable]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None