---
source_file: "vendor/graphify/tests/fixtures/sample_php_container.php"
type: "code"
community: "Community None"
degree: 4
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# sample_php_container.php

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 4

## Architecture Graph
```mermaid
graph LR
    center["sample_php_container.php"]:::centerNode
    center -->|"contains"| N_fixtures_sample_php_container_paymentgateway["PaymentGateway"]
    center -->|"contains"| N_fixtures_sample_php_container_stripegateway["StripeGateway"]
    center -->|"contains"| N_fixtures_sample_php_container_cashiergateway["CashierGateway"]
    center -->|"contains"| N_fixtures_sample_php_container_appserviceprovider["AppServiceProvider"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[AppServiceProvider]] - `contains` [EXTRACTED]
- [[CashierGateway]] - `contains` [EXTRACTED]
- [[PaymentGateway]] - `contains` [EXTRACTED]
- [[StripeGateway]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[sample_php_container.php]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None