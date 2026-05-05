---
source_file: "vendor/graphify/tests/fixtures/sample_php_listen.php"
type: "code"
community: "Community None"
degree: 3
location: "L5"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# UserRegistered

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 3

## Architecture Graph
```mermaid
graph LR
    center["UserRegistered"]:::centerNode
    center -->|"contains"| N_vendor_graphify_tests_fixtures_sample_php_listen_php["sample_php_listen.php"]
    center -->|"listened_by"| N_fixtures_sample_php_listen_sendwelcomeemail["SendWelcomeEmail"]
    center -->|"listened_by"| N_fixtures_sample_php_listen_notifyadmins["NotifyAdmins"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[NotifyAdmins]] - `listened_by` [EXTRACTED]
- [[SendWelcomeEmail]] - `listened_by` [EXTRACTED]
- [[sample_php_listen.php]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[UserRegistered]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None