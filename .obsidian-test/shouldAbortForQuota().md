---
source_file: "vendor/claude-mem/src/services/worker/RateLimitStore.ts"
type: "code"
community: "Community None"
degree: 6
location: "L140"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# shouldAbortForQuota()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 6

## Architecture Graph
```mermaid
graph LR
    center["shouldAbortForQuota[]"]:::centerNode
    center -->|"imports"| N_vendor_claude_mem_tests_worker_rate_limit_store_test_ts["rate-limit-store.test.ts"]
    center -->|"contains"| N_vendor_claude_mem_src_services_worker_ratelimitstore_ts["RateLimitStore.ts"]
    center -->|"calls"| N_worker_ratelimitstore_ratelimitstore_get[".get[]"]
    center -->|"calls"| N_worker_ratelimitstore_isapikeyauth["isApiKeyAuth[]"]
    center -->|"imports"| N_vendor_claude_mem_src_services_worker_claudeprovider_ts["ClaudeProvider.ts"]
    center -->|"calls"| N_worker_claudeprovider_claudeprovider_startsession[".startSession[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[.get()_8]] - `calls` [EXTRACTED]
- [[.startSession()]] - `calls` [INFERRED]
- [[ClaudeProvider.ts]] - `imports` [EXTRACTED]
- [[RateLimitStore.ts]] - `contains` [EXTRACTED]
- [[isApiKeyAuth()]] - `calls` [EXTRACTED]
- [[rate-limit-store.test.ts]] - `imports` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[shouldAbortForQuota()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None