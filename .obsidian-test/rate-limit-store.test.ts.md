---
source_file: "vendor/claude-mem/tests/worker/rate-limit-store.test.ts"
type: "code"
community: "Community None"
degree: 5
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# rate-limit-store.test.ts

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 5

## Architecture Graph
```mermaid
graph LR
    center["rate-limit-store.test.ts"]:::centerNode
    center -->|"imports_from"| N_vendor_claude_mem_src_services_worker_ratelimitstore_ts["RateLimitStore.ts"]
    center -->|"imports"| N_worker_ratelimitstore_ratelimitstore["RateLimitStore"]
    center -->|"imports"| N_worker_ratelimitstore_shouldabortforquota["shouldAbortForQuota[]"]
    center -->|"imports"| N_worker_ratelimitstore_isapikeyauth["isApiKeyAuth[]"]
    center -->|"contains"| N_worker_rate_limit_store_test_freshstore["freshStore[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[RateLimitStore]] - `imports` [EXTRACTED]
- [[RateLimitStore.ts]] - `imports_from` [EXTRACTED]
- [[freshStore()]] - `contains` [EXTRACTED]
- [[isApiKeyAuth()]] - `imports` [EXTRACTED]
- [[shouldAbortForQuota()]] - `imports` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[rate-limit-store.test.ts]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None