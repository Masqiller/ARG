---
source_file: "vendor/claude-mem/src/shared/platform-source.ts"
type: "code"
community: "Community None"
degree: 24
location: "L7"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# normalizePlatformSource()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 24

## Architecture Graph
```mermaid
graph LR
    center["normalizePlatformSource[]"]:::centerNode
    center -->|"imports"| N_vendor_claude_mem_src_cli_handlers_observation_ts["observation.ts"]
    center -->|"imports"| N_vendor_claude_mem_src_cli_handlers_summarize_ts["summarize.ts"]
    center -->|"imports"| N_vendor_claude_mem_src_cli_handlers_file_edit_ts["file-edit.ts"]
    center -->|"imports"| N_vendor_claude_mem_src_cli_handlers_session_init_ts["session-init.ts"]
    center -->|"contains"| N_vendor_claude_mem_src_shared_platform_source_ts["platform-source.ts"]
    center -->|"calls"| N_shared_platform_source_sanitizerawsource["sanitizeRawSource[]"]
    center -->|"imports"| N_vendor_claude_mem_src_services_worker_http_shared_ts["shared.ts"]
    center -->|"imports"| N_vendor_claude_mem_src_services_worker_http_routes_sessionroutes_ts["SessionRoutes.ts"]
    center -->|"imports"| N_vendor_claude_mem_src_services_worker_http_routes_dataroutes_ts["DataRoutes.ts"]
    center -->|"imports"| N_vendor_claude_mem_src_services_transcripts_processor_ts["processor.ts"]
    center -->|"imports"| N_vendor_claude_mem_src_services_sqlite_sessionstore_ts["SessionStore.ts"]
    center -->|"imports"| N_vendor_claude_mem_src_services_sqlite_sessions_create_ts["create.ts"]
    center -->|"calls"| N_http_shared_ingestobservation["ingestObservation[]"]
    center -->|"calls"| N_http_shared_ingestprompt["ingestPrompt[]"]
    center -->|"calls"| N_http_shared_ingestsummary["ingestSummary[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[.createSDKSession()]] - `calls` [INFERRED]
- [[.getAllProjects()]] - `calls` [INFERRED]
- [[.getOrCreateSession()]] - `calls` [INFERRED]
- [[.getProjectCatalog()]] - `calls` [INFERRED]
- [[.importSdkSession()]] - `calls` [INFERRED]
- [[.parsePaginationParams()]] - `calls` [INFERRED]
- [[DataRoutes.ts]] - `imports` [EXTRACTED]
- [[SessionRoutes.ts]] - `imports` [EXTRACTED]
- [[SessionStore.ts]] - `imports` [EXTRACTED]
- [[create.ts]] - `imports` [EXTRACTED]
- [[createSDKSession()]] - `calls` [INFERRED]
- [[file-edit.ts]] - `imports` [EXTRACTED]
- [[ingestObservation()]] - `calls` [INFERRED]
- [[ingestPrompt()]] - `calls` [INFERRED]
- [[ingestSummary()]] - `calls` [INFERRED]
- [[observation.ts]] - `imports` [EXTRACTED]
- [[platform-source.ts]] - `contains` [EXTRACTED]
- [[processor.ts]] - `imports` [EXTRACTED]
- [[resolveCreateSessionArgs()]] - `calls` [INFERRED]
- [[resolveCreateSessionArgs()_1]] - `calls` [INFERRED]
- [[sanitizeRawSource()]] - `calls` [EXTRACTED]
- [[session-init.ts]] - `imports` [EXTRACTED]
- [[shared.ts]] - `imports` [EXTRACTED]
- [[summarize.ts]] - `imports` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[normalizePlatformSource()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None