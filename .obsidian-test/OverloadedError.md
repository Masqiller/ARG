---
source_file: "vendor/claude-mem/tests/worker/provider-errors.test.ts"
type: "code"
community: "Community None"
degree: 2
location: "L53"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# OverloadedError

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 2

## Architecture Graph
```mermaid
graph LR
    center["OverloadedError"]:::centerNode
    center -->|"contains"| N_vendor_claude_mem_tests_worker_provider_errors_test_ts["provider-errors.test.ts"]
    center -->|"method"| N_worker_provider_errors_test_overloadederror_constructor[".constructor[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[.constructor()_1]] - `method` [EXTRACTED]
- [[provider-errors.test.ts]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[OverloadedError]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None