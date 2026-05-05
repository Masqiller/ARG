---
source_file: "vendor/claude-mem/src/services/integrations/WindsurfHooksInstaller.ts"
type: "code"
community: "Community None"
degree: 3
location: "L291"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# fetchWindsurfContextFromWorker()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 3

## Architecture Graph
```mermaid
graph LR
    center["fetchWindsurfContextFromWorker[]"]:::centerNode
    center -->|"contains"| N_vendor_claude_mem_src_services_integrations_windsurfhooksinstaller_ts["WindsurfHooksInstaller.ts"]
    center -->|"calls"| N_integrations_windsurfhooksinstaller_writewindsurfcontextfile["writeWindsurfContextFile[]"]
    center -->|"calls"| N_integrations_windsurfhooksinstaller_setupwindsurfprojectcontext["setupWindsurfProjectContext[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[WindsurfHooksInstaller.ts]] - `contains` [EXTRACTED]
- [[setupWindsurfProjectContext()]] - `calls` [EXTRACTED]
- [[writeWindsurfContextFile()]] - `calls` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[fetchWindsurfContextFromWorker()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None