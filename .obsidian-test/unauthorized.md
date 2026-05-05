---
source_file: "vendor/graphify/tests/fixtures/sample.swift"
type: "code"
community: "Community None"
degree: 1
location: "L44"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# unauthorized

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 1

## Architecture Graph
```mermaid
graph LR
    center["unauthorized"]:::centerNode
    center -->|"case_of"| N_fixtures_sample_networkerror["NetworkError"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[NetworkError]] - `case_of` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[unauthorized]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None