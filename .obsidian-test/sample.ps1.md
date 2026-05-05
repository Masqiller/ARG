---
source_file: "vendor/graphify/tests/fixtures/sample.ps1"
type: "code"
community: "Community None"
degree: 3
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# sample.ps1

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 3

## Architecture Graph
```mermaid
graph LR
    center["sample.ps1"]:::centerNode
    center -->|"contains"| N_fixtures_sample_dataprocessor["DataProcessor"]
    center -->|"contains"| N_fixtures_sample_get_data["Get-Data[]"]
    center -->|"contains"| N_fixtures_sample_process_items["Process-Items[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[DataProcessor]] - `contains` [EXTRACTED]
- [[Get-Data()]] - `contains` [EXTRACTED]
- [[Process-Items()]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[sample.ps1]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None