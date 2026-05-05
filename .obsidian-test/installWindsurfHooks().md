---
source_file: "vendor/claude-mem/src/services/integrations/WindsurfHooksInstaller.ts"
type: "code"
community: "Community None"
degree: 5
location: "L191"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# installWindsurfHooks()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 5

## Architecture Graph
```mermaid
graph LR
    center["installWindsurfHooks[]"]:::centerNode
    center -->|"calls"| N_integrations_cursorhooksinstaller_findworkerservicepath["findWorkerServicePath[]"]
    center -->|"calls"| N_integrations_cursorhooksinstaller_findbunpath["findBunPath[]"]
    center -->|"contains"| N_vendor_claude_mem_src_services_integrations_windsurfhooksinstaller_ts["WindsurfHooksInstaller.ts"]
    center -->|"calls"| N_integrations_windsurfhooksinstaller_writewindsurfhooksandsetupcontext["writeWindsurfHooksAndSetupContext[]"]
    center -->|"calls"| N_integrations_windsurfhooksinstaller_handlewindsurfcommand["handleWindsurfCommand[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[WindsurfHooksInstaller.ts]] - `contains` [EXTRACTED]
- [[findBunPath()]] - `calls` [INFERRED]
- [[findWorkerServicePath()]] - `calls` [INFERRED]
- [[handleWindsurfCommand()]] - `calls` [EXTRACTED]
- [[writeWindsurfHooksAndSetupContext()]] - `calls` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[installWindsurfHooks()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None