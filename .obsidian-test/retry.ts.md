---
source_file: "vendor/claude-mem/src/services/worker/retry.ts"
type: "code"
community: "Community None"
degree: 10
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# retry.ts

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 10

## Architecture Graph
```mermaid
graph LR
    center["retry.ts"]:::centerNode
    center -->|"imports_from"| N_vendor_claude_mem_src_services_worker_provider_errors_ts["provider-errors.ts"]
    center -->|"imports"| N_worker_provider_errors_classifiedprovidererror["ClassifiedProviderError"]
    center -->|"imports"| N_worker_provider_errors_isclassified["isClassified[]"]
    center -->|"imports_from"| N_vendor_claude_mem_src_services_worker_openrouterprovider_ts["OpenRouterProvider.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_services_worker_geminiprovider_ts["GeminiProvider.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_utils_logger_ts["logger.ts"]
    center -->|"imports"| N_utils_logger_logger["Logger"]
    center -->|"contains"| N_worker_retry_isretryablekind["isRetryableKind[]"]
    center -->|"contains"| N_worker_retry_computebackoffms["computeBackoffMs[]"]
    center -->|"contains"| N_worker_retry_withretry["withRetry[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[ClassifiedProviderError]] - `imports` [EXTRACTED]
- [[GeminiProvider.ts]] - `imports_from` [EXTRACTED]
- [[Logger]] - `imports` [EXTRACTED]
- [[OpenRouterProvider.ts]] - `imports_from` [EXTRACTED]
- [[computeBackoffMs()]] - `contains` [EXTRACTED]
- [[isClassified()]] - `imports` [EXTRACTED]
- [[isRetryableKind()]] - `contains` [EXTRACTED]
- [[logger.ts]] - `imports_from` [EXTRACTED]
- [[provider-errors.ts]] - `imports_from` [EXTRACTED]
- [[withRetry()]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[retry.ts]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None