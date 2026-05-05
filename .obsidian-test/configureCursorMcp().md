---
source_file: "vendor/claude-mem/src/services/integrations/CursorHooksInstaller.ts"
type: "code"
community: "Community None"
degree: 3
location: "L152"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# configureCursorMcp()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 3

## Architecture Graph
```mermaid
graph LR
    center["configureCursorMcp[]"]:::centerNode
    center -->|"contains"| N_vendor_claude_mem_src_services_integrations_cursorhooksinstaller_ts["CursorHooksInstaller.ts"]
    center -->|"calls"| N_integrations_cursorhooksinstaller_findmcpserverpath["findMcpServerPath[]"]
    center -->|"calls"| N_integrations_cursorhooksinstaller_gettargetdir["getTargetDir[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[CursorHooksInstaller.ts]] - `contains` [EXTRACTED]
- [[findMcpServerPath()]] - `calls` [EXTRACTED]
- [[getTargetDir()]] - `calls` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[configureCursorMcp()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None