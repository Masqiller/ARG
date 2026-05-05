---
source_file: "vendor/claude-mem/src/services/worker/provider-errors.ts"
type: "code"
community: "Community None"
degree: 7
location: "L30"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# isClassified()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 7

## Architecture Graph
```mermaid
graph LR
    center["isClassified[]"]:::centerNode
    center -->|"imports"| N_vendor_claude_mem_tests_worker_provider_errors_test_ts["provider-errors.test.ts"]
    center -->|"imports"| N_vendor_claude_mem_tests_worker_provider_classifiers_test_ts["provider-classifiers.test.ts"]
    center -->|"imports"| N_vendor_claude_mem_src_services_worker_service_ts["worker-service.ts"]
    center -->|"contains"| N_vendor_claude_mem_src_services_worker_provider_errors_ts["provider-errors.ts"]
    center -->|"imports"| N_vendor_claude_mem_src_services_worker_retry_ts["retry.ts"]
    center -->|"calls"| N_worker_retry_isretryablekind["isRetryableKind[]"]
    center -->|"calls"| N_worker_retry_withretry["withRetry[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[isRetryableKind()]] - `calls` [INFERRED]
- [[provider-classifiers.test.ts]] - `imports` [EXTRACTED]
- [[provider-errors.test.ts]] - `imports` [EXTRACTED]
- [[provider-errors.ts]] - `contains` [EXTRACTED]
- [[retry.ts]] - `imports` [EXTRACTED]
- [[withRetry()]] - `calls` [INFERRED]
- [[worker-service.ts]] - `imports` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[isClassified()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None