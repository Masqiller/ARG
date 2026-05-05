---
source_file: "vendor/claude-mem/src/services/worker-service.ts"
type: "code"
community: "Community None"
degree: 19
location: "L107"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# WorkerService

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 19

## Architecture Graph
```mermaid
graph LR
    center["WorkerService"]:::centerNode
    center -->|"contains"| N_vendor_claude_mem_src_services_worker_service_ts["worker-service.ts"]
    center -->|"method"| N_services_worker_service_workerservice_constructor[".constructor[]"]
    center -->|"method"| N_services_worker_service_workerservice_registersignalhandlers[".registerSignalHandlers[]"]
    center -->|"method"| N_services_worker_service_workerservice_registerroutes[".registerRoutes[]"]
    center -->|"method"| N_services_worker_service_workerservice_start[".start[]"]
    center -->|"method"| N_services_worker_service_workerservice_initializebackground[".initializeBackground[]"]
    center -->|"method"| N_services_worker_service_workerservice_runmcpselfcheck[".runMcpSelfCheck[]"]
    center -->|"method"| N_services_worker_service_workerservice_starttranscriptwatcher[".startTranscriptWatcher[]"]
    center -->|"method"| N_services_worker_service_workerservice_getactiveagent[".getActiveAgent[]"]
    center -->|"method"| N_services_worker_service_workerservice_reclassifyatdispatch[".reclassifyAtDispatch[]"]
    center -->|"method"| N_services_worker_service_workerservice_startsessionprocessor[".startSessionProcessor[]"]
    center -->|"method"| N_services_worker_service_workerservice_issessionterminatederror[".isSessionTerminatedError[]"]
    center -->|"method"| N_services_worker_service_workerservice_runfallbackforterminatedsession[".runFallbackForTerminatedSession[]"]
    center -->|"method"| N_services_worker_service_workerservice_terminatesession[".terminateSession[]"]
    center -->|"method"| N_services_worker_service_workerservice_shutdown[".shutdown[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[.broadcastProcessingStatus()]] - `method` [EXTRACTED]
- [[.constructor()_4]] - `method` [EXTRACTED]
- [[.getActiveAgent()]] - `method` [EXTRACTED]
- [[.initializeBackground()]] - `method` [EXTRACTED]
- [[.isSessionTerminatedError()]] - `method` [EXTRACTED]
- [[.reclassifyAtDispatch()]] - `method` [EXTRACTED]
- [[.registerRoutes()]] - `method` [EXTRACTED]
- [[.registerSignalHandlers()]] - `method` [EXTRACTED]
- [[.runFallbackForTerminatedSession()]] - `method` [EXTRACTED]
- [[.runMcpSelfCheck()]] - `method` [EXTRACTED]
- [[.shutdown()]] - `method` [EXTRACTED]
- [[.start()]] - `method` [EXTRACTED]
- [[.startSessionProcessor()]] - `method` [EXTRACTED]
- [[.startTranscriptWatcher()]] - `method` [EXTRACTED]
- [[.terminateSession()]] - `method` [EXTRACTED]
- [[DataRoutes.ts]] - `imports` [EXTRACTED]
- [[SessionEventBroadcaster.ts]] - `imports` [EXTRACTED]
- [[SessionRoutes.ts]] - `imports` [EXTRACTED]
- [[worker-service.ts]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[WorkerService]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None