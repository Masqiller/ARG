---
source_file: "vendor/claude-mem/src/services/sync/ChromaMcpManager.ts"
type: "code"
community: "Community None"
degree: 14
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# ChromaMcpManager.ts

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 14

## Architecture Graph
```mermaid
graph LR
    center["ChromaMcpManager.ts"]:::centerNode
    center -->|"imports_from"| N_vendor_claude_mem_tests_services_sync_chroma_mcp_manager_ssl_test_ts["chroma-mcp-manager-ssl.test.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_shared_paths_ts["paths.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_shared_settingsdefaultsmanager_ts["SettingsDefaultsManager.ts"]
    center -->|"imports"| N_shared_settingsdefaultsmanager_settingsdefaultsmanager["SettingsDefaultsManager"]
    center -->|"imports_from"| N_vendor_claude_mem_src_services_worker_service_ts["worker-service.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_services_worker_http_routes_chromaroutes_ts["ChromaRoutes.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_utils_logger_ts["logger.ts"]
    center -->|"imports"| N_utils_logger_logger["Logger"]
    center -->|"imports_from"| N_vendor_claude_mem_src_supervisor_env_sanitizer_ts["env-sanitizer.ts"]
    center -->|"imports"| N_supervisor_env_sanitizer_sanitizeenv["sanitizeEnv[]"]
    center -->|"imports_from"| N_vendor_claude_mem_src_supervisor_index_ts["index.ts"]
    center -->|"imports"| N_supervisor_index_getsupervisor["getSupervisor[]"]
    center -->|"contains"| N_sync_chromamcpmanager_chromamcpmanager["ChromaMcpManager"]
    center -->|"imports_from"| N_vendor_claude_mem_src_services_sync_chromasync_ts["ChromaSync.ts"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[ChromaMcpManager]] - `contains` [EXTRACTED]
- [[ChromaRoutes.ts]] - `imports_from` [EXTRACTED]
- [[ChromaSync.ts]] - `imports_from` [EXTRACTED]
- [[Logger]] - `imports` [EXTRACTED]
- [[SettingsDefaultsManager]] - `imports` [EXTRACTED]
- [[SettingsDefaultsManager.ts]] - `imports_from` [EXTRACTED]
- [[chroma-mcp-manager-ssl.test.ts]] - `imports_from` [EXTRACTED]
- [[env-sanitizer.ts]] - `imports_from` [EXTRACTED]
- [[getSupervisor()]] - `imports` [EXTRACTED]
- [[index.ts_11]] - `imports_from` [EXTRACTED]
- [[logger.ts]] - `imports_from` [EXTRACTED]
- [[paths.ts]] - `imports_from` [EXTRACTED]
- [[sanitizeEnv()]] - `imports` [EXTRACTED]
- [[worker-service.ts]] - `imports_from` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[ChromaMcpManager.ts]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None