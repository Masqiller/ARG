---
source_file: "vendor/claude-mem/src/services/integrations/CursorHooksInstaller.ts"
type: "code"
community: "Community None"
degree: 6
location: "L205"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# installCursorHooks()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 6

## Architecture Graph
```mermaid
graph LR
    center["installCursorHooks[]"]:::centerNode
    center -->|"contains"| N_vendor_claude_mem_src_services_integrations_cursorhooksinstaller_ts["CursorHooksInstaller.ts"]
    center -->|"calls"| N_integrations_cursorhooksinstaller_findworkerservicepath["findWorkerServicePath[]"]
    center -->|"calls"| N_integrations_cursorhooksinstaller_findbunpath["findBunPath[]"]
    center -->|"calls"| N_integrations_cursorhooksinstaller_gettargetdir["getTargetDir[]"]
    center -->|"calls"| N_integrations_cursorhooksinstaller_writehooksjsonandsetupproject["writeHooksJsonAndSetupProject[]"]
    center -->|"calls"| N_integrations_cursorhooksinstaller_handlecursorcommand["handleCursorCommand[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[CursorHooksInstaller.ts]] - `contains` [EXTRACTED]
- [[findBunPath()]] - `calls` [EXTRACTED]
- [[findWorkerServicePath()]] - `calls` [EXTRACTED]
- [[getTargetDir()]] - `calls` [EXTRACTED]
- [[handleCursorCommand()]] - `calls` [EXTRACTED]
- [[writeHooksJsonAndSetupProject()]] - `calls` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[installCursorHooks()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None