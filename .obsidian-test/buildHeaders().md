---
source_file: "vendor/graphify/tests/fixtures/sample.ts"
type: "code"
community: "Community None"
degree: 1
location: "L19"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# buildHeaders()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 1

## Architecture Graph
```mermaid
graph LR
    center["buildHeaders[]"]:::centerNode
    center -->|"contains"| N_vendor_graphify_tests_fixtures_sample_ts["sample.ts"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[sample.ts]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[buildHeaders()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None