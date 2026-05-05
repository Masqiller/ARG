---
source_file: "vendor/claude-mem/src/services/integrations/CursorHooksInstaller.ts"
type: "code"
community: "Community None"
degree: 4
location: "L366"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# uninstallCursorHooks()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 4

## Architecture Graph
```mermaid
graph LR
    center["uninstallCursorHooks[]"]:::centerNode
    center -->|"contains"| N_vendor_claude_mem_src_services_integrations_cursorhooksinstaller_ts["CursorHooksInstaller.ts"]
    center -->|"calls"| N_integrations_cursorhooksinstaller_gettargetdir["getTargetDir[]"]
    center -->|"calls"| N_integrations_cursorhooksinstaller_removecursorhooksfiles["removeCursorHooksFiles[]"]
    center -->|"calls"| N_integrations_cursorhooksinstaller_handlecursorcommand["handleCursorCommand[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[CursorHooksInstaller.ts]] - `contains` [EXTRACTED]
- [[getTargetDir()]] - `calls` [EXTRACTED]
- [[handleCursorCommand()]] - `calls` [EXTRACTED]
- [[removeCursorHooksFiles()]] - `calls` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[uninstallCursorHooks()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None