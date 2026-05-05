---
source_file: "vendor/claude-mem/src/services/integrations/CursorHooksInstaller.ts"
type: "code"
community: "Community None"
degree: 4
location: "L345"
tags:
  - graphify/code
  - graphify/INFERRED
  - community/Community_None
---

# fetchInitialContextFromWorker()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 4

## Architecture Graph
```mermaid
graph LR
    center["fetchInitialContextFromWorker[]"]:::centerNode
    center -->|"calls"| N_shared_worker_utils_workerhttprequest["workerHttpRequest[]"]
    center -->|"contains"| N_vendor_claude_mem_src_services_integrations_cursorhooksinstaller_ts["CursorHooksInstaller.ts"]
    center -->|"calls"| N_integrations_cursorhooksinstaller_setupprojectcontext["setupProjectContext[]"]
    center -->|"calls"| N_utils_cursor_utils_writecontextfile["writeContextFile[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[CursorHooksInstaller.ts]] - `contains` [EXTRACTED]
- [[setupProjectContext()]] - `calls` [EXTRACTED]
- [[workerHttpRequest()]] - `calls` [INFERRED]
- [[writeContextFile()]] - `calls` [INFERRED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[fetchInitialContextFromWorker()]]
```

#graphify/code #graphify/INFERRED #community/Community_None