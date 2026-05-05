---
source_file: "vendor/claude-mem/src/services/worker/ClaudeProvider.ts"
type: "code"
community: "Community None"
degree: 4
location: "L37"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# classifyClaudeError()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 4

## Architecture Graph
```mermaid
graph LR
    center["classifyClaudeError[]"]:::centerNode
    center -->|"imports"| N_vendor_claude_mem_tests_worker_provider_classifiers_test_ts["provider-classifiers.test.ts"]
    center -->|"imports"| N_vendor_claude_mem_src_services_worker_service_ts["worker-service.ts"]
    center -->|"calls"| N_services_worker_service_workerservice_reclassifyatdispatch[".reclassifyAtDispatch[]"]
    center -->|"contains"| N_vendor_claude_mem_src_services_worker_claudeprovider_ts["ClaudeProvider.ts"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[.reclassifyAtDispatch()]] - `calls` [INFERRED]
- [[ClaudeProvider.ts]] - `contains` [EXTRACTED]
- [[provider-classifiers.test.ts]] - `imports` [EXTRACTED]
- [[worker-service.ts]] - `imports` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[classifyClaudeError()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None