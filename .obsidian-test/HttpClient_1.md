---
source_file: "vendor/graphify/tests/fixtures/sample.cs"
type: "code"
community: "Community None"
degree: 1
location: "L14"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# HttpClient

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 1

## Architecture Graph
```mermaid
graph LR
    center["HttpClient"]:::centerNode
    center -->|"references"| N_fixtures_sample_dataprocessor["DataProcessor"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[DataProcessor]] - `references` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[HttpClient_1]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None