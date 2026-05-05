---
source_file: "vendor/graphify/tests/fixtures/sample_php_static_prop.php"
type: "code"
community: "Community None"
degree: 3
location: "L11"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# ColorResolver

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 3

## Architecture Graph
```mermaid
graph LR
    center["ColorResolver"]:::centerNode
    center -->|"contains"| N_vendor_graphify_tests_fixtures_sample_php_static_prop_php["sample_php_static_prop.php"]
    center -->|"method"| N_fixtures_sample_php_static_prop_colorresolver_primary[".primary[]"]
    center -->|"method"| N_fixtures_sample_php_static_prop_colorresolver_accent[".accent[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[.accent()]] - `method` [EXTRACTED]
- [[.primary()]] - `method` [EXTRACTED]
- [[sample_php_static_prop.php]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[ColorResolver]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None