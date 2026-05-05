---
source_file: "vendor/claude-mem/src/services/worker/provider-errors.ts"
type: "code"
community: "Community None"
degree: 9
location: "L10"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# ClassifiedProviderError

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 9

## Architecture Graph
```mermaid
graph LR
    center["ClassifiedProviderError"]:::centerNode
    center -->|"imports"| N_vendor_claude_mem_tests_worker_provider_errors_test_ts["provider-errors.test.ts"]
    center -->|"imports"| N_vendor_claude_mem_tests_worker_provider_classifiers_test_ts["provider-classifiers.test.ts"]
    center -->|"imports"| N_vendor_claude_mem_src_services_worker_service_ts["worker-service.ts"]
    center -->|"imports"| N_vendor_claude_mem_src_services_worker_claudeprovider_ts["ClaudeProvider.ts"]
    center -->|"contains"| N_vendor_claude_mem_src_services_worker_provider_errors_ts["provider-errors.ts"]
    center -->|"method"| N_worker_provider_errors_classifiedprovidererror_constructor[".constructor[]"]
    center -->|"imports"| N_vendor_claude_mem_src_services_worker_openrouterprovider_ts["OpenRouterProvider.ts"]
    center -->|"imports"| N_vendor_claude_mem_src_services_worker_geminiprovider_ts["GeminiProvider.ts"]
    center -->|"imports"| N_vendor_claude_mem_src_services_worker_retry_ts["retry.ts"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[.constructor()_9]] - `method` [EXTRACTED]
- [[ClaudeProvider.ts]] - `imports` [EXTRACTED]
- [[GeminiProvider.ts]] - `imports` [EXTRACTED]
- [[OpenRouterProvider.ts]] - `imports` [EXTRACTED]
- [[provider-classifiers.test.ts]] - `imports` [EXTRACTED]
- [[provider-errors.test.ts]] - `imports` [EXTRACTED]
- [[provider-errors.ts]] - `contains` [EXTRACTED]
- [[retry.ts]] - `imports` [EXTRACTED]
- [[worker-service.ts]] - `imports` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[ClassifiedProviderError]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None