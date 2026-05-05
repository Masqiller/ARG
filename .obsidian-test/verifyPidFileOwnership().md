---
source_file: "vendor/claude-mem/src/supervisor/process-registry.ts"
type: "code"
community: "Community None"
degree: 7
location: "L98"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# verifyPidFileOwnership()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 7

## Architecture Graph
```mermaid
graph LR
    center["verifyPidFileOwnership[]"]:::centerNode
    center -->|"calls"| N_services_worker_service_main["main[]"]
    center -->|"imports"| N_vendor_claude_mem_src_services_infrastructure_processmanager_ts["ProcessManager.ts"]
    center -->|"imports"| N_vendor_claude_mem_src_supervisor_index_ts["index.ts"]
    center -->|"calls"| N_supervisor_index_validateworkerpidfile["validateWorkerPidFile[]"]
    center -->|"contains"| N_vendor_claude_mem_src_supervisor_process_registry_ts["process-registry.ts"]
    center -->|"calls"| N_supervisor_process_registry_ispidalive["isPidAlive[]"]
    center -->|"calls"| N_supervisor_process_registry_captureprocessstarttoken["captureProcessStartToken[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[ProcessManager.ts]] - `imports` [EXTRACTED]
- [[captureProcessStartToken()]] - `calls` [EXTRACTED]
- [[index.ts_11]] - `imports` [EXTRACTED]
- [[isPidAlive()]] - `calls` [EXTRACTED]
- [[main()_22]] - `calls` [INFERRED]
- [[process-registry.ts]] - `contains` [EXTRACTED]
- [[validateWorkerPidFile()]] - `calls` [INFERRED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[verifyPidFileOwnership()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None