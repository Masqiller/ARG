---
source_file: "vendor/external_plugins/caveman/tests/test_caveman_stats.js"
type: "code"
community: "Community None"
degree: 2
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# test_caveman_stats.js

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 2

## Architecture Graph
```mermaid
graph LR
    center["test_caveman_stats.js"]:::centerNode
    center -->|"contains"| N_tests_test_caveman_stats_test["test[]"]
    center -->|"contains"| N_tests_test_caveman_stats_makesession["makeSession[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[makeSession()]] - `contains` [EXTRACTED]
- [[test()_3]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[test_caveman_stats.js]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None