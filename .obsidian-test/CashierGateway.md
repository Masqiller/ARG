---
source_file: "vendor/graphify/tests/fixtures/sample_php_container.php"
type: "code"
community: "Community None"
degree: 3
location: "L7"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# CashierGateway

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 3

## Architecture Graph
```mermaid
graph LR
    center["CashierGateway"]:::centerNode
    center -->|"contains"| N_vendor_graphify_tests_fixtures_sample_php_container_php["sample_php_container.php"]
    center -->|"bound_to"| N_fixtures_sample_php_container_stripegateway["StripeGateway"]
    center -->|"references_constant"| N_fixtures_sample_php_container_appserviceprovider_register[".register[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[.register()]] - `references_constant` [EXTRACTED]
- [[StripeGateway]] - `bound_to` [EXTRACTED]
- [[sample_php_container.php]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[CashierGateway]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None