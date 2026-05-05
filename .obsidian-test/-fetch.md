---
source_file: "vendor/graphify/tests/fixtures/sample.m"
type: "code"
community: "Community None"
degree: 1
location: "L31"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# -fetch

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 1

## Architecture Graph
```mermaid
graph LR
    center["-fetch"]:::centerNode
    center -->|"method"| N_fixtures_sample_dog["Dog"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[Dog]] - `method` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[-fetch]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None