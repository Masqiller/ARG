---
source_file: "vendor/claude-mem/src/services/integrations/WindsurfHooksInstaller.ts"
type: "code"
community: "Community None"
degree: 5
location: "L256"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# setupWindsurfProjectContext()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 5

## Architecture Graph
```mermaid
graph LR
    center["setupWindsurfProjectContext[]"]:::centerNode
    center -->|"calls"| N_shared_worker_utils_getworkerport["getWorkerPort[]"]
    center -->|"contains"| N_vendor_claude_mem_src_services_integrations_windsurfhooksinstaller_ts["WindsurfHooksInstaller.ts"]
    center -->|"calls"| N_integrations_windsurfhooksinstaller_registerwindsurfproject["registerWindsurfProject[]"]
    center -->|"calls"| N_integrations_windsurfhooksinstaller_writewindsurfhooksandsetupcontext["writeWindsurfHooksAndSetupContext[]"]
    center -->|"calls"| N_integrations_windsurfhooksinstaller_fetchwindsurfcontextfromworker["fetchWindsurfContextFromWorker[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[WindsurfHooksInstaller.ts]] - `contains` [EXTRACTED]
- [[fetchWindsurfContextFromWorker()]] - `calls` [EXTRACTED]
- [[getWorkerPort()]] - `calls` [INFERRED]
- [[registerWindsurfProject()]] - `calls` [EXTRACTED]
- [[writeWindsurfHooksAndSetupContext()]] - `calls` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[setupWindsurfProjectContext()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None