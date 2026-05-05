---
source_file: "vendor/claude-mem/src/shared/platform-source.ts"
type: "code"
community: "Community None"
degree: 14
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# platform-source.ts

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 14

## Architecture Graph
```mermaid
graph LR
    center["platform-source.ts"]:::centerNode
    center -->|"imports_from"| N_vendor_claude_mem_src_cli_handlers_observation_ts["observation.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_cli_handlers_summarize_ts["summarize.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_cli_handlers_file_edit_ts["file-edit.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_cli_handlers_session_init_ts["session-init.ts"]
    center -->|"contains"| N_shared_platform_source_sanitizerawsource["sanitizeRawSource[]"]
    center -->|"contains"| N_shared_platform_source_normalizeplatformsource["normalizePlatformSource[]"]
    center -->|"contains"| N_shared_platform_source_sortplatformsources["sortPlatformSources[]"]
    center -->|"imports_from"| N_vendor_claude_mem_src_services_worker_http_shared_ts["shared.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_services_worker_http_routes_sessionroutes_ts["SessionRoutes.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_services_worker_http_routes_dataroutes_ts["DataRoutes.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_services_transcripts_processor_ts["processor.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_services_sqlite_sessionstore_ts["SessionStore.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_services_sqlite_sessions_create_ts["create.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_services_sqlite_migrations_runner_ts["runner.ts"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[DataRoutes.ts]] - `imports_from` [EXTRACTED]
- [[SessionRoutes.ts]] - `imports_from` [EXTRACTED]
- [[SessionStore.ts]] - `imports_from` [EXTRACTED]
- [[create.ts]] - `imports_from` [EXTRACTED]
- [[file-edit.ts]] - `imports_from` [EXTRACTED]
- [[normalizePlatformSource()]] - `contains` [EXTRACTED]
- [[observation.ts]] - `imports_from` [EXTRACTED]
- [[processor.ts]] - `imports_from` [EXTRACTED]
- [[runner.ts]] - `imports_from` [EXTRACTED]
- [[sanitizeRawSource()]] - `contains` [EXTRACTED]
- [[session-init.ts]] - `imports_from` [EXTRACTED]
- [[shared.ts]] - `imports_from` [EXTRACTED]
- [[sortPlatformSources()]] - `contains` [EXTRACTED]
- [[summarize.ts]] - `imports_from` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[platform-source.ts]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None