---
source_file: "vendor/claude-mem/src/services/worker/OpenRouterProvider.ts"
type: "code"
community: "Community None"
degree: 5
location: "L43"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# classifyOpenRouterError()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 5

## Architecture Graph
```mermaid
graph LR
    center["classifyOpenRouterError[]"]:::centerNode
    center -->|"imports"| N_vendor_claude_mem_tests_worker_provider_classifiers_test_ts["provider-classifiers.test.ts"]
    center -->|"imports"| N_vendor_claude_mem_src_services_worker_service_ts["worker-service.ts"]
    center -->|"calls"| N_services_worker_service_workerservice_reclassifyatdispatch[".reclassifyAtDispatch[]"]
    center -->|"contains"| N_vendor_claude_mem_src_services_worker_openrouterprovider_ts["OpenRouterProvider.ts"]
    center -->|"calls"| N_worker_openrouterprovider_parseretryafterms["parseRetryAfterMs[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[.reclassifyAtDispatch()]] - `calls` [INFERRED]
- [[OpenRouterProvider.ts]] - `contains` [EXTRACTED]
- [[parseRetryAfterMs()]] - `calls` [EXTRACTED]
- [[provider-classifiers.test.ts]] - `imports` [EXTRACTED]
- [[worker-service.ts]] - `imports` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[classifyOpenRouterError()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None