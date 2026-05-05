---
source_file: "vendor/claude-mem/src/shared/worker-utils.ts"
type: "code"
community: "Community None"
degree: 18
location: "L73"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# workerHttpRequest()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 18

## Architecture Graph
```mermaid
graph LR
    center["workerHttpRequest[]"]:::centerNode
    center -->|"imports"| N_vendor_claude_mem_src_servers_mcp_server_ts["mcp-server.ts"]
    center -->|"calls"| N_servers_mcp_server_callworkerapi["callWorkerAPI[]"]
    center -->|"calls"| N_servers_mcp_server_executeworkerpostrequest["executeWorkerPostRequest[]"]
    center -->|"calls"| N_servers_mcp_server_verifyworkerconnection["verifyWorkerConnection[]"]
    center -->|"contains"| N_vendor_claude_mem_src_shared_worker_utils_ts["worker-utils.ts"]
    center -->|"calls"| N_shared_worker_utils_fetchwithtimeout["fetchWithTimeout[]"]
    center -->|"calls"| N_shared_worker_utils_buildworkerurl["buildWorkerUrl[]"]
    center -->|"calls"| N_shared_worker_utils_isworkerhealthy["isWorkerHealthy[]"]
    center -->|"calls"| N_shared_worker_utils_getworkerversion["getWorkerVersion[]"]
    center -->|"calls"| N_shared_worker_utils_executewithworkerfallback["executeWithWorkerFallback[]"]
    center -->|"imports"| N_vendor_claude_mem_src_services_transcripts_processor_ts["processor.ts"]
    center -->|"imports"| N_vendor_claude_mem_src_services_integrations_cursorhooksinstaller_ts["CursorHooksInstaller.ts"]
    center -->|"imports"| N_vendor_claude_mem_src_utils_claude_md_utils_ts["claude-md-utils.ts"]
    center -->|"calls"| N_transcripts_processor_transcripteventprocessor_queuesummary[".queueSummary[]"]
    center -->|"calls"| N_transcripts_processor_transcripteventprocessor_updatecontext[".updateContext[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[.queueSummary()]] - `calls` [INFERRED]
- [[.updateContext()]] - `calls` [INFERRED]
- [[CursorHooksInstaller.ts]] - `imports` [EXTRACTED]
- [[buildWorkerUrl()]] - `calls` [EXTRACTED]
- [[callWorkerAPI()]] - `calls` [INFERRED]
- [[claude-md-utils.ts]] - `imports` [EXTRACTED]
- [[executeWithWorkerFallback()]] - `calls` [EXTRACTED]
- [[executeWorkerPostRequest()]] - `calls` [INFERRED]
- [[fetchInitialContextFromWorker()]] - `calls` [INFERRED]
- [[fetchWithTimeout()]] - `calls` [EXTRACTED]
- [[getWorkerVersion()]] - `calls` [EXTRACTED]
- [[isWorkerHealthy()]] - `calls` [EXTRACTED]
- [[mcp-server.ts]] - `imports` [EXTRACTED]
- [[processor.ts]] - `imports` [EXTRACTED]
- [[updateCursorContextForProject()]] - `calls` [INFERRED]
- [[updateFolderClaudeMdFiles()]] - `calls` [INFERRED]
- [[verifyWorkerConnection()]] - `calls` [INFERRED]
- [[worker-utils.ts]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[workerHttpRequest()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None