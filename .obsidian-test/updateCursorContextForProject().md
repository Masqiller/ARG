---
source_file: "vendor/claude-mem/src/services/integrations/CursorHooksInstaller.ts"
type: "code"
community: "Community None"
degree: 7
location: "L57"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# updateCursorContextForProject()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 7

## Architecture Graph
```mermaid
graph LR
    center["updateCursorContextForProject[]"]:::centerNode
    center -->|"calls"| N_shared_worker_utils_workerhttprequest["workerHttpRequest[]"]
    center -->|"imports"| N_vendor_claude_mem_src_services_worker_service_ts["worker-service.ts"]
    center -->|"imports"| N_vendor_claude_mem_src_services_worker_agents_responseprocessor_ts["ResponseProcessor.ts"]
    center -->|"calls"| N_agents_responseprocessor_syncandbroadcastsummary["syncAndBroadcastSummary[]"]
    center -->|"contains"| N_vendor_claude_mem_src_services_integrations_cursorhooksinstaller_ts["CursorHooksInstaller.ts"]
    center -->|"calls"| N_integrations_cursorhooksinstaller_readcursorregistry["readCursorRegistry[]"]
    center -->|"calls"| N_utils_cursor_utils_writecontextfile["writeContextFile[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[CursorHooksInstaller.ts]] - `contains` [EXTRACTED]
- [[ResponseProcessor.ts]] - `imports` [EXTRACTED]
- [[readCursorRegistry()]] - `calls` [EXTRACTED]
- [[syncAndBroadcastSummary()]] - `calls` [INFERRED]
- [[worker-service.ts]] - `imports` [EXTRACTED]
- [[workerHttpRequest()]] - `calls` [INFERRED]
- [[writeContextFile()]] - `calls` [INFERRED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[updateCursorContextForProject()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None