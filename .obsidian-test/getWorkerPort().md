---
source_file: "vendor/claude-mem/src/shared/worker-utils.ts"
type: "code"
community: "Community None"
degree: 18
location: "L42"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# getWorkerPort()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 18

## Architecture Graph
```mermaid
graph LR
    center["getWorkerPort[]"]:::centerNode
    center -->|"imports"| N_vendor_claude_mem_src_cli_handlers_context_ts["context.ts"]
    center -->|"imports"| N_vendor_claude_mem_src_cli_handlers_user_message_ts["user-message.ts"]
    center -->|"imports"| N_vendor_claude_mem_src_servers_mcp_server_ts["mcp-server.ts"]
    center -->|"calls"| N_servers_mcp_server_ensureworkerconnection["ensureWorkerConnection[]"]
    center -->|"contains"| N_vendor_claude_mem_src_shared_worker_utils_ts["worker-utils.ts"]
    center -->|"calls"| N_shared_worker_utils_buildworkerurl["buildWorkerUrl[]"]
    center -->|"imports"| N_vendor_claude_mem_src_services_worker_service_ts["worker-service.ts"]
    center -->|"imports"| N_vendor_claude_mem_src_services_worker_agents_responseprocessor_ts["ResponseProcessor.ts"]
    center -->|"imports"| N_vendor_claude_mem_src_services_worker_http_routes_dataroutes_ts["DataRoutes.ts"]
    center -->|"imports"| N_vendor_claude_mem_src_services_integrations_cursorhooksinstaller_ts["CursorHooksInstaller.ts"]
    center -->|"imports"| N_vendor_claude_mem_src_services_integrations_windsurfhooksinstaller_ts["WindsurfHooksInstaller.ts"]
    center -->|"imports"| N_vendor_claude_mem_src_services_integrations_opencodeinstaller_ts["OpenCodeInstaller.ts"]
    center -->|"calls"| N_services_worker_service_workerservice_start[".start[]"]
    center -->|"calls"| N_services_worker_service_main["main[]"]
    center -->|"calls"| N_agents_responseprocessor_syncandbroadcastobservations["syncAndBroadcastObservations[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[.start()]] - `calls` [INFERRED]
- [[CursorHooksInstaller.ts]] - `imports` [EXTRACTED]
- [[DataRoutes.ts]] - `imports` [EXTRACTED]
- [[OpenCodeInstaller.ts]] - `imports` [EXTRACTED]
- [[ResponseProcessor.ts]] - `imports` [EXTRACTED]
- [[WindsurfHooksInstaller.ts]] - `imports` [EXTRACTED]
- [[buildWorkerUrl()]] - `calls` [EXTRACTED]
- [[context.ts]] - `imports` [EXTRACTED]
- [[ensureWorkerConnection()]] - `calls` [INFERRED]
- [[fetchRealContextFromWorker()]] - `calls` [INFERRED]
- [[main()_22]] - `calls` [INFERRED]
- [[mcp-server.ts]] - `imports` [EXTRACTED]
- [[setupWindsurfProjectContext()]] - `calls` [INFERRED]
- [[syncAndBroadcastObservations()]] - `calls` [INFERRED]
- [[syncAndBroadcastSummary()]] - `calls` [INFERRED]
- [[user-message.ts]] - `imports` [EXTRACTED]
- [[worker-service.ts]] - `imports` [EXTRACTED]
- [[worker-utils.ts]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[getWorkerPort()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None