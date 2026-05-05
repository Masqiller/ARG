---
source_file: "vendor/claude-mem/src/services/infrastructure/HealthMonitor.ts"
type: "code"
community: "Community None"
degree: 15
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# HealthMonitor.ts

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 15

## Architecture Graph
```mermaid
graph LR
    center["HealthMonitor.ts"]:::centerNode
    center -->|"imports_from"| N_vendor_claude_mem_src_shared_paths_ts["paths.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_services_worker_spawner_ts["worker-spawner.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_services_worker_service_ts["worker-service.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_utils_logger_ts["logger.ts"]
    center -->|"imports"| N_utils_logger_logger["Logger"]
    center -->|"contains"| N_infrastructure_healthmonitor_httprequesttoworker["httpRequestToWorker[]"]
    center -->|"contains"| N_infrastructure_healthmonitor_isportinuse["isPortInUse[]"]
    center -->|"contains"| N_infrastructure_healthmonitor_pollendpointuntilok["pollEndpointUntilOk[]"]
    center -->|"contains"| N_infrastructure_healthmonitor_waitforhealth["waitForHealth[]"]
    center -->|"contains"| N_infrastructure_healthmonitor_waitforreadiness["waitForReadiness[]"]
    center -->|"contains"| N_infrastructure_healthmonitor_waitforportfree["waitForPortFree[]"]
    center -->|"contains"| N_infrastructure_healthmonitor_httpshutdown["httpShutdown[]"]
    center -->|"contains"| N_infrastructure_healthmonitor_getinstalledpluginversion["getInstalledPluginVersion[]"]
    center -->|"contains"| N_infrastructure_healthmonitor_getrunningworkerversion["getRunningWorkerVersion[]"]
    center -->|"contains"| N_infrastructure_healthmonitor_checkversionmatch["checkVersionMatch[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[Logger]] - `imports` [EXTRACTED]
- [[checkVersionMatch()]] - `contains` [EXTRACTED]
- [[getInstalledPluginVersion()]] - `contains` [EXTRACTED]
- [[getRunningWorkerVersion()]] - `contains` [EXTRACTED]
- [[httpRequestToWorker()]] - `contains` [EXTRACTED]
- [[httpShutdown()]] - `contains` [EXTRACTED]
- [[isPortInUse()_1]] - `contains` [EXTRACTED]
- [[logger.ts]] - `imports_from` [EXTRACTED]
- [[paths.ts]] - `imports_from` [EXTRACTED]
- [[pollEndpointUntilOk()]] - `contains` [EXTRACTED]
- [[waitForHealth()_1]] - `contains` [EXTRACTED]
- [[waitForPortFree()]] - `contains` [EXTRACTED]
- [[waitForReadiness()]] - `contains` [EXTRACTED]
- [[worker-service.ts]] - `imports_from` [EXTRACTED]
- [[worker-spawner.ts]] - `imports_from` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[HealthMonitor.ts]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None