---
source_file: "vendor/claude-mem/src/services/worker/RateLimitStore.ts"
type: "code"
community: "Community None"
degree: 3
location: "L219"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# isApiKeyAuth()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 3

## Architecture Graph
```mermaid
graph LR
    center["isApiKeyAuth[]"]:::centerNode
    center -->|"imports"| N_vendor_claude_mem_tests_worker_rate_limit_store_test_ts["rate-limit-store.test.ts"]
    center -->|"contains"| N_vendor_claude_mem_src_services_worker_ratelimitstore_ts["RateLimitStore.ts"]
    center -->|"calls"| N_worker_ratelimitstore_shouldabortforquota["shouldAbortForQuota[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[RateLimitStore.ts]] - `contains` [EXTRACTED]
- [[rate-limit-store.test.ts]] - `imports` [EXTRACTED]
- [[shouldAbortForQuota()]] - `calls` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[isApiKeyAuth()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None