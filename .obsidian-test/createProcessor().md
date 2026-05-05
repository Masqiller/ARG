---
source_file: "vendor/graphify/tests/fixtures/sample.swift"
type: "code"
community: "Community None"
degree: 2
location: "L71"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# createProcessor()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 2

## Architecture Graph
```mermaid
graph LR
    center["createProcessor[]"]:::centerNode
    center -->|"calls"| N_fixtures_sample_dataprocessor["DataProcessor"]
    center -->|"contains"| N_vendor_graphify_tests_fixtures_sample_swift["sample.swift"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[DataProcessor]] - `calls` [EXTRACTED]
- [[sample.swift]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[createProcessor()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None