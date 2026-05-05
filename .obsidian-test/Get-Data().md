---
source_file: "vendor/graphify/tests/fixtures/sample.ps1"
type: "code"
community: "Community None"
degree: 2
location: "L4"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# Get-Data()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 2

## Architecture Graph
```mermaid
graph LR
    center["Get-Data[]"]:::centerNode
    center -->|"contains"| N_vendor_graphify_tests_fixtures_sample_ps1["sample.ps1"]
    center -->|"calls"| N_fixtures_sample_process_items["Process-Items[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[Process-Items()]] - `calls` [EXTRACTED]
- [[sample.ps1]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[Get-Data()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None