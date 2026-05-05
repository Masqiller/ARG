---
source_file: "vendor/graphify/tests/fixtures/sample.ex"
type: "code"
community: "Community None"
degree: 2
location: "L11"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# create()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 2

## Architecture Graph
```mermaid
graph LR
    center["create[]"]:::centerNode
    center -->|"method"| N_fixtures_sample_myapp_accounts_user["MyApp.Accounts.User"]
    center -->|"calls"| N_fixtures_sample_myapp_accounts_user_validate["validate[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[MyApp.Accounts.User]] - `method` [EXTRACTED]
- [[validate()_1]] - `calls` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[create()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None