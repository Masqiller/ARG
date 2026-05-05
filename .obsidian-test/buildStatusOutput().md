---
source_file: "vendor/claude-mem/src/services/worker-service.ts"
type: "code"
community: "Community None"
degree: 2
location: "L98"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# buildStatusOutput()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 2

## Architecture Graph
```mermaid
graph LR
    center["buildStatusOutput[]"]:::centerNode
    center -->|"imports"| N_vendor_claude_mem_tests_infrastructure_worker_json_status_test_ts["worker-json-status.test.ts"]
    center -->|"contains"| N_vendor_claude_mem_src_services_worker_service_ts["worker-service.ts"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[worker-json-status.test.ts]] - `imports` [EXTRACTED]
- [[worker-service.ts]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[buildStatusOutput()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None