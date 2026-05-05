---
source_file: "vendor/graphify/tests/fixtures/sample_php_config.php"
type: "code"
community: "Community None"
degree: 3
location: "L11"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# RateLimiter

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 3

## Architecture Graph
```mermaid
graph LR
    center["RateLimiter"]:::centerNode
    center -->|"contains"| N_vendor_graphify_tests_fixtures_sample_php_config_php["sample_php_config.php"]
    center -->|"method"| N_fixtures_sample_php_config_ratelimiter_persecond[".perSecond[]"]
    center -->|"method"| N_fixtures_sample_php_config_ratelimiter_perday[".perDay[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[.perDay()]] - `method` [EXTRACTED]
- [[.perSecond()]] - `method` [EXTRACTED]
- [[sample_php_config.php]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[RateLimiter]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None