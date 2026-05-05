---
source_file: "vendor/claude-mem/src/services/worker/RateLimitStore.ts"
type: "code"
community: "Community None"
degree: 8
location: "L55"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# RateLimitStore

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 8

## Architecture Graph
```mermaid
graph LR
    center["RateLimitStore"]:::centerNode
    center -->|"imports"| N_vendor_claude_mem_tests_worker_rate_limit_store_test_ts["rate-limit-store.test.ts"]
    center -->|"contains"| N_vendor_claude_mem_src_services_worker_ratelimitstore_ts["RateLimitStore.ts"]
    center -->|"method"| N_worker_ratelimitstore_ratelimitstore_set[".set[]"]
    center -->|"method"| N_worker_ratelimitstore_ratelimitstore_get[".get[]"]
    center -->|"method"| N_worker_ratelimitstore_ratelimitstore_getall[".getAll[]"]
    center -->|"method"| N_worker_ratelimitstore_ratelimitstore_getmostrecentbywindow[".getMostRecentByWindow[]"]
    center -->|"method"| N_worker_ratelimitstore_ratelimitstore_size[".size[]"]
    center -->|"method"| N_worker_ratelimitstore_ratelimitstore_clear[".clear[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[.clear()_2]] - `method` [EXTRACTED]
- [[.get()_8]] - `method` [EXTRACTED]
- [[.getAll()]] - `method` [EXTRACTED]
- [[.getMostRecentByWindow()]] - `method` [EXTRACTED]
- [[.set()_1]] - `method` [EXTRACTED]
- [[.size()]] - `method` [EXTRACTED]
- [[RateLimitStore.ts]] - `contains` [EXTRACTED]
- [[rate-limit-store.test.ts]] - `imports` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[RateLimitStore]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None