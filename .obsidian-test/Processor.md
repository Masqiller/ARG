---
source_file: "vendor/graphify/tests/fixtures/sample.swift"
type: "code"
community: "Community None"
degree: 4
location: "L4"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# Processor

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 4

## Architecture Graph
```mermaid
graph LR
    center["Processor"]:::centerNode
    center -->|"contains"| N_vendor_graphify_tests_fixtures_sample_java["sample.java"]
    center -->|"inherits"| N_fixtures_sample_dataprocessor["DataProcessor"]
    center -->|"method"| N_fixtures_sample_processor_process[".process[]"]
    center -->|"contains"| N_vendor_graphify_tests_fixtures_sample_swift["sample.swift"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[.process()_1]] - `method` [EXTRACTED]
- [[DataProcessor]] - `inherits` [EXTRACTED]
- [[sample.java]] - `contains` [EXTRACTED]
- [[sample.swift]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[Processor]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None