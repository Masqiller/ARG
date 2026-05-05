---
source_file: "vendor/claude-mem/src/services/infrastructure/HealthMonitor.ts"
type: "code"
community: "Community None"
degree: 4
location: "L85"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# waitForPortFree()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 4

## Architecture Graph
```mermaid
graph LR
    center["waitForPortFree[]"]:::centerNode
    center -->|"imports"| N_vendor_claude_mem_src_services_worker_service_ts["worker-service.ts"]
    center -->|"calls"| N_services_worker_service_main["main[]"]
    center -->|"contains"| N_vendor_claude_mem_src_services_infrastructure_healthmonitor_ts["HealthMonitor.ts"]
    center -->|"calls"| N_infrastructure_healthmonitor_isportinuse["isPortInUse[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[HealthMonitor.ts]] - `contains` [EXTRACTED]
- [[isPortInUse()_1]] - `calls` [EXTRACTED]
- [[main()_22]] - `calls` [INFERRED]
- [[worker-service.ts]] - `imports` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[waitForPortFree()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None