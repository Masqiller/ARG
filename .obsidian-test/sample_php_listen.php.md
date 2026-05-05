---
source_file: "vendor/graphify/tests/fixtures/sample_php_listen.php"
type: "code"
community: "Community None"
degree: 6
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# sample_php_listen.php

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 6

## Architecture Graph
```mermaid
graph LR
    center["sample_php_listen.php"]:::centerNode
    center -->|"contains"| N_fixtures_sample_php_listen_userregistered["UserRegistered"]
    center -->|"contains"| N_fixtures_sample_php_listen_orderplaced["OrderPlaced"]
    center -->|"contains"| N_fixtures_sample_php_listen_sendwelcomeemail["SendWelcomeEmail"]
    center -->|"contains"| N_fixtures_sample_php_listen_notifyadmins["NotifyAdmins"]
    center -->|"contains"| N_fixtures_sample_php_listen_shiporder["ShipOrder"]
    center -->|"contains"| N_fixtures_sample_php_listen_eventserviceprovider["EventServiceProvider"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[EventServiceProvider]] - `contains` [EXTRACTED]
- [[NotifyAdmins]] - `contains` [EXTRACTED]
- [[OrderPlaced]] - `contains` [EXTRACTED]
- [[SendWelcomeEmail]] - `contains` [EXTRACTED]
- [[ShipOrder]] - `contains` [EXTRACTED]
- [[UserRegistered]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[sample_php_listen.php]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None