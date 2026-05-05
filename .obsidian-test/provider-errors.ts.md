---
source_file: "vendor/claude-mem/src/services/worker/provider-errors.ts"
type: "code"
community: "Community None"
degree: 9
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# provider-errors.ts

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 9

## Architecture Graph
```mermaid
graph LR
    center["provider-errors.ts"]:::centerNode
    center -->|"imports_from"| N_vendor_claude_mem_tests_worker_provider_errors_test_ts["provider-errors.test.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_tests_worker_provider_classifiers_test_ts["provider-classifiers.test.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_services_worker_service_ts["worker-service.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_services_worker_claudeprovider_ts["ClaudeProvider.ts"]
    center -->|"contains"| N_worker_provider_errors_classifiedprovidererror["ClassifiedProviderError"]
    center -->|"contains"| N_worker_provider_errors_isclassified["isClassified[]"]
    center -->|"imports_from"| N_vendor_claude_mem_src_services_worker_openrouterprovider_ts["OpenRouterProvider.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_services_worker_geminiprovider_ts["GeminiProvider.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_services_worker_retry_ts["retry.ts"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[ClassifiedProviderError]] - `contains` [EXTRACTED]
- [[ClaudeProvider.ts]] - `imports_from` [EXTRACTED]
- [[GeminiProvider.ts]] - `imports_from` [EXTRACTED]
- [[OpenRouterProvider.ts]] - `imports_from` [EXTRACTED]
- [[isClassified()]] - `contains` [EXTRACTED]
- [[provider-classifiers.test.ts]] - `imports_from` [EXTRACTED]
- [[provider-errors.test.ts]] - `imports_from` [EXTRACTED]
- [[retry.ts]] - `imports_from` [EXTRACTED]
- [[worker-service.ts]] - `imports_from` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[provider-errors.ts]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None