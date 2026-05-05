---
source_file: "vendor/graphify/tests/fixtures/sample.ex"
type: "code"
community: "Community None"
degree: 1
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# sample.ex

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 1

## Architecture Graph
```mermaid
graph LR
    center["sample.ex"]:::centerNode
    center -->|"contains"| N_fixtures_sample_myapp_accounts_user["MyApp.Accounts.User"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[MyApp.Accounts.User]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[sample.ex]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None