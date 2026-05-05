---
source_file: "vendor/claude-mem/src/services/integrations/CursorHooksInstaller.ts"
type: "code"
community: "Community None"
degree: 4
location: "L38"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# registerCursorProject()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 4

## Architecture Graph
```mermaid
graph LR
    center["registerCursorProject[]"]:::centerNode
    center -->|"contains"| N_vendor_claude_mem_src_services_integrations_cursorhooksinstaller_ts["CursorHooksInstaller.ts"]
    center -->|"calls"| N_integrations_cursorhooksinstaller_readcursorregistry["readCursorRegistry[]"]
    center -->|"calls"| N_integrations_cursorhooksinstaller_writecursorregistry["writeCursorRegistry[]"]
    center -->|"calls"| N_integrations_cursorhooksinstaller_setupprojectcontext["setupProjectContext[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[CursorHooksInstaller.ts]] - `contains` [EXTRACTED]
- [[readCursorRegistry()]] - `calls` [EXTRACTED]
- [[setupProjectContext()]] - `calls` [EXTRACTED]
- [[writeCursorRegistry()]] - `calls` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[registerCursorProject()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None