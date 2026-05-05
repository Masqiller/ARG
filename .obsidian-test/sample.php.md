---
source_file: "vendor/graphify/tests/fixtures/sample.php"
type: "code"
community: "Community None"
degree: 2
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# sample.php

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 2

## Architecture Graph
```mermaid
graph LR
    center["sample.php"]:::centerNode
    center -->|"contains"| N_fixtures_sample_apiclient["ApiClient"]
    center -->|"contains"| N_fixtures_sample_parseresponse["parseResponse[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[ApiClient]] - `contains` [EXTRACTED]
- [[parseResponse()]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[sample.php]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None