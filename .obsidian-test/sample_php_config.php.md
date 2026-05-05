---
source_file: "vendor/graphify/tests/fixtures/sample_php_config.php"
type: "code"
community: "Community None"
degree: 2
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# sample_php_config.php

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 2

## Architecture Graph
```mermaid
graph LR
    center["sample_php_config.php"]:::centerNode
    center -->|"contains"| N_fixtures_sample_php_config_throttle["Throttle"]
    center -->|"contains"| N_fixtures_sample_php_config_ratelimiter["RateLimiter"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[RateLimiter]] - `contains` [EXTRACTED]
- [[Throttle]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[sample_php_config.php]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None