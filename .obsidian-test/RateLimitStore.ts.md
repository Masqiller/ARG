---
source_file: "vendor/claude-mem/src/services/worker/RateLimitStore.ts"
type: "code"
community: "Community None"
degree: 6
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# RateLimitStore.ts

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 6

## Architecture Graph
```mermaid
graph LR
    center["RateLimitStore.ts"]:::centerNode
    center -->|"imports_from"| N_vendor_claude_mem_tests_worker_rate_limit_store_test_ts["rate-limit-store.test.ts"]
    center -->|"contains"| N_worker_ratelimitstore_ratelimitstore["RateLimitStore"]
    center -->|"contains"| N_worker_ratelimitstore_shouldabortforquota["shouldAbortForQuota[]"]
    center -->|"contains"| N_worker_ratelimitstore_isapikeyauth["isApiKeyAuth[]"]
    center -->|"imports_from"| N_vendor_claude_mem_src_services_worker_claudeprovider_ts["ClaudeProvider.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_services_server_server_ts["Server.ts"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[ClaudeProvider.ts]] - `imports_from` [EXTRACTED]
- [[RateLimitStore]] - `contains` [EXTRACTED]
- [[Server.ts]] - `imports_from` [EXTRACTED]
- [[isApiKeyAuth()]] - `contains` [EXTRACTED]
- [[rate-limit-store.test.ts]] - `imports_from` [EXTRACTED]
- [[shouldAbortForQuota()]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[RateLimitStore.ts]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None