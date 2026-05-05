---
source_file: "vendor/claude-mem/src/services/worker/retry.ts"
type: "code"
community: "Community None"
degree: 6
location: "L58"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# withRetry()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 6

## Architecture Graph
```mermaid
graph LR
    center["withRetry[]"]:::centerNode
    center -->|"calls"| N_worker_provider_errors_isclassified["isClassified[]"]
    center -->|"imports"| N_vendor_claude_mem_src_services_worker_openrouterprovider_ts["OpenRouterProvider.ts"]
    center -->|"imports"| N_vendor_claude_mem_src_services_worker_geminiprovider_ts["GeminiProvider.ts"]
    center -->|"contains"| N_vendor_claude_mem_src_services_worker_retry_ts["retry.ts"]
    center -->|"calls"| N_worker_retry_isretryablekind["isRetryableKind[]"]
    center -->|"calls"| N_worker_retry_computebackoffms["computeBackoffMs[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[GeminiProvider.ts]] - `imports` [EXTRACTED]
- [[OpenRouterProvider.ts]] - `imports` [EXTRACTED]
- [[computeBackoffMs()]] - `calls` [EXTRACTED]
- [[isClassified()]] - `calls` [INFERRED]
- [[isRetryableKind()]] - `calls` [EXTRACTED]
- [[retry.ts]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[withRetry()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None