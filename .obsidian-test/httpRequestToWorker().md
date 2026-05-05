---
source_file: "vendor/claude-mem/src/services/infrastructure/HealthMonitor.ts"
type: "code"
community: "Community None"
degree: 4
location: "L8"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# httpRequestToWorker()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 4

## Architecture Graph
```mermaid
graph LR
    center["httpRequestToWorker[]"]:::centerNode
    center -->|"contains"| N_vendor_claude_mem_src_services_infrastructure_healthmonitor_ts["HealthMonitor.ts"]
    center -->|"calls"| N_infrastructure_healthmonitor_pollendpointuntilok["pollEndpointUntilOk[]"]
    center -->|"calls"| N_infrastructure_healthmonitor_httpshutdown["httpShutdown[]"]
    center -->|"calls"| N_infrastructure_healthmonitor_getrunningworkerversion["getRunningWorkerVersion[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[HealthMonitor.ts]] - `contains` [EXTRACTED]
- [[getRunningWorkerVersion()]] - `calls` [EXTRACTED]
- [[httpShutdown()]] - `calls` [EXTRACTED]
- [[pollEndpointUntilOk()]] - `calls` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[httpRequestToWorker()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None