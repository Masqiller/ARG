---
source_file: "vendor/claude-mem/src/services/infrastructure/HealthMonitor.ts"
type: "code"
community: "Community None"
degree: 5
location: "L81"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# waitForReadiness()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 5

## Architecture Graph
```mermaid
graph LR
    center["waitForReadiness[]"]:::centerNode
    center -->|"imports"| N_vendor_claude_mem_src_services_worker_spawner_ts["worker-spawner.ts"]
    center -->|"calls"| N_services_worker_spawner_ensureworkerstarted["ensureWorkerStarted[]"]
    center -->|"imports"| N_vendor_claude_mem_src_services_worker_service_ts["worker-service.ts"]
    center -->|"contains"| N_vendor_claude_mem_src_services_infrastructure_healthmonitor_ts["HealthMonitor.ts"]
    center -->|"calls"| N_infrastructure_healthmonitor_pollendpointuntilok["pollEndpointUntilOk[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[HealthMonitor.ts]] - `contains` [EXTRACTED]
- [[ensureWorkerStarted()]] - `calls` [INFERRED]
- [[pollEndpointUntilOk()]] - `calls` [EXTRACTED]
- [[worker-service.ts]] - `imports` [EXTRACTED]
- [[worker-spawner.ts]] - `imports` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[waitForReadiness()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None