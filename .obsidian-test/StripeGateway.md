---
source_file: "vendor/graphify/tests/fixtures/sample_php_container.php"
type: "code"
community: "Community None"
degree: 4
location: "L6"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# StripeGateway

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 4

## Architecture Graph
```mermaid
graph LR
    center["StripeGateway"]:::centerNode
    center -->|"contains"| N_vendor_graphify_tests_fixtures_sample_php_container_php["sample_php_container.php"]
    center -->|"bound_to"| N_fixtures_sample_php_container_paymentgateway["PaymentGateway"]
    center -->|"references_constant"| N_fixtures_sample_php_container_appserviceprovider_register[".register[]"]
    center -->|"bound_to"| N_fixtures_sample_php_container_cashiergateway["CashierGateway"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[.register()]] - `references_constant` [EXTRACTED]
- [[CashierGateway]] - `bound_to` [EXTRACTED]
- [[PaymentGateway]] - `bound_to` [EXTRACTED]
- [[sample_php_container.php]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[StripeGateway]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None