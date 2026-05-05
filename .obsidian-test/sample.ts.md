---
source_file: "vendor/graphify/tests/fixtures/sample.ts"
type: "code"
community: "Community None"
degree: 2
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# sample.ts

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 2

## Architecture Graph
```mermaid
graph LR
    center["sample.ts"]:::centerNode
    center -->|"contains"| N_fixtures_sample_httpclient["HttpClient"]
    center -->|"contains"| N_fixtures_sample_buildheaders["buildHeaders[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[HttpClient]] - `contains` [EXTRACTED]
- [[buildHeaders()]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[sample.ts]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None