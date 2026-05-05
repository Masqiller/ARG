---
source_file: "vendor/graphify/tests/fixtures/sample.zig"
type: "code"
community: "Community None"
degree: 2
location: "L30"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# multiply()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 2

## Architecture Graph
```mermaid
graph LR
    center["multiply[]"]:::centerNode
    center -->|"calls"| N_fixtures_sample_main["main[]"]
    center -->|"contains"| N_vendor_graphify_tests_fixtures_sample_zig["sample.zig"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[main()_1]] - `calls` [EXTRACTED]
- [[sample.zig]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[multiply()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None