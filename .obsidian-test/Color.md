---
source_file: "vendor/graphify/tests/fixtures/sample.zig"
type: "code"
community: "Community None"
degree: 1
location: "L15"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# Color

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 1

## Architecture Graph
```mermaid
graph LR
    center["Color"]:::centerNode
    center -->|"contains"| N_vendor_graphify_tests_fixtures_sample_zig["sample.zig"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[sample.zig]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[Color]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None