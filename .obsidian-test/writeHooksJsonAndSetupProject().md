---
source_file: "vendor/claude-mem/src/services/integrations/CursorHooksInstaller.ts"
type: "code"
community: "Community None"
degree: 3
location: "L272"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# writeHooksJsonAndSetupProject()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 3

## Architecture Graph
```mermaid
graph LR
    center["writeHooksJsonAndSetupProject[]"]:::centerNode
    center -->|"contains"| N_vendor_claude_mem_src_services_integrations_cursorhooksinstaller_ts["CursorHooksInstaller.ts"]
    center -->|"calls"| N_integrations_cursorhooksinstaller_installcursorhooks["installCursorHooks[]"]
    center -->|"calls"| N_integrations_cursorhooksinstaller_setupprojectcontext["setupProjectContext[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[CursorHooksInstaller.ts]] - `contains` [EXTRACTED]
- [[installCursorHooks()]] - `calls` [EXTRACTED]
- [[setupProjectContext()]] - `calls` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[writeHooksJsonAndSetupProject()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None