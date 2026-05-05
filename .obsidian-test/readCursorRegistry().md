---
source_file: "vendor/claude-mem/src/services/integrations/CursorHooksInstaller.ts"
type: "code"
community: "Community None"
degree: 4
location: "L30"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# readCursorRegistry()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 4

## Architecture Graph
```mermaid
graph LR
    center["readCursorRegistry[]"]:::centerNode
    center -->|"contains"| N_vendor_claude_mem_src_services_integrations_cursorhooksinstaller_ts["CursorHooksInstaller.ts"]
    center -->|"calls"| N_integrations_cursorhooksinstaller_registercursorproject["registerCursorProject[]"]
    center -->|"calls"| N_integrations_cursorhooksinstaller_unregistercursorproject["unregisterCursorProject[]"]
    center -->|"calls"| N_integrations_cursorhooksinstaller_updatecursorcontextforproject["updateCursorContextForProject[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[CursorHooksInstaller.ts]] - `contains` [EXTRACTED]
- [[registerCursorProject()]] - `calls` [EXTRACTED]
- [[unregisterCursorProject()]] - `calls` [EXTRACTED]
- [[updateCursorContextForProject()]] - `calls` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[readCursorRegistry()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None