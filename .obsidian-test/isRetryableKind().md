---
source_file: "vendor/claude-mem/src/services/worker/retry.ts"
type: "code"
community: "Community None"
degree: 3
location: "L38"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# isRetryableKind()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 3

## Architecture Graph
```mermaid
graph LR
    center["isRetryableKind[]"]:::centerNode
    center -->|"calls"| N_worker_provider_errors_isclassified["isClassified[]"]
    center -->|"contains"| N_vendor_claude_mem_src_services_worker_retry_ts["retry.ts"]
    center -->|"calls"| N_worker_retry_withretry["withRetry[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[isClassified()]] - `calls` [INFERRED]
- [[retry.ts]] - `contains` [EXTRACTED]
- [[withRetry()]] - `calls` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[isRetryableKind()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None