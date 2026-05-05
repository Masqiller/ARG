---
source_file: "vendor/graphify/tests/fixtures/sample.rb"
type: "code"
community: "Community None"
degree: 2
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# sample.rb

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 2

## Architecture Graph
```mermaid
graph LR
    center["sample.rb"]:::centerNode
    center -->|"contains"| N_fixtures_sample_apiclient["ApiClient"]
    center -->|"contains"| N_fixtures_sample_parse_response["parse_response[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[ApiClient]] - `contains` [EXTRACTED]
- [[parse_response()]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[sample.rb]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None