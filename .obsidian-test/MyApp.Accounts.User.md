---
source_file: "vendor/graphify/tests/fixtures/sample.ex"
type: "code"
community: "Community None"
degree: 4
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# MyApp.Accounts.User

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 4

## Architecture Graph
```mermaid
graph LR
    center["MyApp.Accounts.User"]:::centerNode
    center -->|"contains"| N_vendor_graphify_tests_fixtures_sample_ex["sample.ex"]
    center -->|"method"| N_fixtures_sample_myapp_accounts_user_create["create[]"]
    center -->|"method"| N_fixtures_sample_myapp_accounts_user_find["find[]"]
    center -->|"method"| N_fixtures_sample_myapp_accounts_user_validate["validate[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[create()]] - `method` [EXTRACTED]
- [[find()]] - `method` [EXTRACTED]
- [[sample.ex]] - `contains` [EXTRACTED]
- [[validate()_1]] - `method` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[MyApp.Accounts.User]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None