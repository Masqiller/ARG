---
source_file: "vendor/graphify/tests/fixtures/sample_php_static_prop.php"
type: "code"
community: "Community None"
degree: 2
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# sample_php_static_prop.php

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 2

## Architecture Graph
```mermaid
graph LR
    center["sample_php_static_prop.php"]:::centerNode
    center -->|"contains"| N_fixtures_sample_php_static_prop_defaultpalette["DefaultPalette"]
    center -->|"contains"| N_fixtures_sample_php_static_prop_colorresolver["ColorResolver"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[ColorResolver]] - `contains` [EXTRACTED]
- [[DefaultPalette]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[sample_php_static_prop.php]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None