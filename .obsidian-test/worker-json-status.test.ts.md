---
source_file: "vendor/claude-mem/tests/infrastructure/worker-json-status.test.ts"
type: "code"
community: "Community None"
degree: 3
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# worker-json-status.test.ts

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 3

## Architecture Graph
```mermaid
graph LR
    center["worker-json-status.test.ts"]:::centerNode
    center -->|"imports_from"| N_vendor_claude_mem_src_services_worker_service_ts["worker-service.ts"]
    center -->|"imports"| N_services_worker_service_buildstatusoutput["buildStatusOutput[]"]
    center -->|"contains"| N_infrastructure_worker_json_status_test_runworkerstart["runWorkerStart[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[buildStatusOutput()]] - `imports` [EXTRACTED]
- [[runWorkerStart()]] - `contains` [EXTRACTED]
- [[worker-service.ts]] - `imports_from` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[worker-json-status.test.ts]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None