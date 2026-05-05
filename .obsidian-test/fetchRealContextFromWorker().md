---
source_file: "vendor/claude-mem/src/services/integrations/OpenCodeInstaller.ts"
type: "code"
community: "Community None"
degree: 3
location: "L105"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# fetchRealContextFromWorker()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 3

## Architecture Graph
```mermaid
graph LR
    center["fetchRealContextFromWorker[]"]:::centerNode
    center -->|"calls"| N_shared_worker_utils_getworkerport["getWorkerPort[]"]
    center -->|"contains"| N_vendor_claude_mem_src_services_integrations_opencodeinstaller_ts["OpenCodeInstaller.ts"]
    center -->|"calls"| N_integrations_opencodeinstaller_installopencodeintegration["installOpenCodeIntegration[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[OpenCodeInstaller.ts]] - `contains` [EXTRACTED]
- [[getWorkerPort()]] - `calls` [INFERRED]
- [[installOpenCodeIntegration()]] - `calls` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[fetchRealContextFromWorker()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None