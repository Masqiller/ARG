---
source_file: "vendor/claude-mem/src/services/integrations/CursorHooksInstaller.ts"
type: "code"
community: "Community None"
degree: 6
location: "L538"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# handleCursorCommand()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 6

## Architecture Graph
```mermaid
graph LR
    center["handleCursorCommand[]"]:::centerNode
    center -->|"imports"| N_vendor_claude_mem_src_services_worker_service_ts["worker-service.ts"]
    center -->|"calls"| N_services_worker_service_main["main[]"]
    center -->|"contains"| N_vendor_claude_mem_src_services_integrations_cursorhooksinstaller_ts["CursorHooksInstaller.ts"]
    center -->|"calls"| N_integrations_cursorhooksinstaller_installcursorhooks["installCursorHooks[]"]
    center -->|"calls"| N_integrations_cursorhooksinstaller_uninstallcursorhooks["uninstallCursorHooks[]"]
    center -->|"calls"| N_integrations_cursorhooksinstaller_checkcursorhooksstatus["checkCursorHooksStatus[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[CursorHooksInstaller.ts]] - `contains` [EXTRACTED]
- [[checkCursorHooksStatus()]] - `calls` [EXTRACTED]
- [[installCursorHooks()]] - `calls` [EXTRACTED]
- [[main()_22]] - `calls` [INFERRED]
- [[uninstallCursorHooks()]] - `calls` [EXTRACTED]
- [[worker-service.ts]] - `imports` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[handleCursorCommand()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None