---
source_file: "vendor/claude-mem/src/services/infrastructure/HealthMonitor.ts"
type: "code"
community: "Community None"
degree: 4
location: "L54"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# pollEndpointUntilOk()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 4

## Architecture Graph
```mermaid
graph LR
    center["pollEndpointUntilOk[]"]:::centerNode
    center -->|"contains"| N_vendor_claude_mem_src_services_infrastructure_healthmonitor_ts["HealthMonitor.ts"]
    center -->|"calls"| N_infrastructure_healthmonitor_httprequesttoworker["httpRequestToWorker[]"]
    center -->|"calls"| N_infrastructure_healthmonitor_waitforhealth["waitForHealth[]"]
    center -->|"calls"| N_infrastructure_healthmonitor_waitforreadiness["waitForReadiness[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[HealthMonitor.ts]] - `contains` [EXTRACTED]
- [[httpRequestToWorker()]] - `calls` [EXTRACTED]
- [[waitForHealth()_1]] - `calls` [EXTRACTED]
- [[waitForReadiness()]] - `calls` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[pollEndpointUntilOk()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None