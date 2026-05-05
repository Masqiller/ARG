---
source_file: "vendor/claude-mem/src/services/integrations/CursorHooksInstaller.ts"
type: "code"
community: "Community None"
degree: 37
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# CursorHooksInstaller.ts

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 37

## Architecture Graph
```mermaid
graph LR
    center["CursorHooksInstaller.ts"]:::centerNode
    center -->|"imports_from"| N_vendor_claude_mem_src_shared_worker_utils_ts["worker-utils.ts"]
    center -->|"imports"| N_shared_worker_utils_getworkerport["getWorkerPort[]"]
    center -->|"imports"| N_shared_worker_utils_workerhttprequest["workerHttpRequest[]"]
    center -->|"imports_from"| N_vendor_claude_mem_src_shared_paths_ts["paths.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_services_worker_service_ts["worker-service.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_services_worker_agents_responseprocessor_ts["ResponseProcessor.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_utils_logger_ts["logger.ts"]
    center -->|"imports"| N_utils_logger_logger["Logger"]
    center -->|"imports_from"| N_vendor_claude_mem_src_utils_cursor_utils_ts["cursor-utils.ts"]
    center -->|"imports"| N_utils_cursor_utils_readcursorregistry["readCursorRegistry[]"]
    center -->|"imports"| N_utils_cursor_utils_writecursorregistry["writeCursorRegistry[]"]
    center -->|"imports"| N_utils_cursor_utils_writecontextfile["writeContextFile[]"]
    center -->|"imports_from"| N_vendor_claude_mem_src_services_integrations_types_ts["types.ts"]
    center -->|"contains"| N_integrations_cursorhooksinstaller_detectplatform["detectPlatform[]"]
    center -->|"contains"| N_integrations_cursorhooksinstaller_getscriptextension["getScriptExtension[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[GeminiCliHooksInstaller.ts]] - `imports_from` [EXTRACTED]
- [[Logger]] - `imports` [EXTRACTED]
- [[McpIntegrations.ts]] - `imports_from` [EXTRACTED]
- [[ResponseProcessor.ts]] - `imports_from` [EXTRACTED]
- [[WindsurfHooksInstaller.ts]] - `imports_from` [EXTRACTED]
- [[checkCursorHooksStatus()]] - `contains` [EXTRACTED]
- [[configureCursorMcp()]] - `contains` [EXTRACTED]
- [[cursor-utils.ts]] - `imports_from` [EXTRACTED]
- [[detectClaudeCode()]] - `contains` [EXTRACTED]
- [[detectPlatform()]] - `contains` [EXTRACTED]
- [[fetchInitialContextFromWorker()]] - `contains` [EXTRACTED]
- [[findBunPath()]] - `contains` [EXTRACTED]
- [[findMcpServerPath()]] - `contains` [EXTRACTED]
- [[findWorkerServicePath()]] - `contains` [EXTRACTED]
- [[getScriptExtension()]] - `contains` [EXTRACTED]
- [[getTargetDir()]] - `contains` [EXTRACTED]
- [[getWorkerPort()]] - `imports` [EXTRACTED]
- [[handleCursorCommand()]] - `contains` [EXTRACTED]
- [[installCursorHooks()]] - `contains` [EXTRACTED]
- [[logger.ts]] - `imports_from` [EXTRACTED]
- [[paths.ts]] - `imports_from` [EXTRACTED]
- [[readCursorRegistry()_1]] - `imports` [EXTRACTED]
- [[readCursorRegistry()]] - `contains` [EXTRACTED]
- [[registerCursorProject()]] - `contains` [EXTRACTED]
- [[removeCursorHooksFiles()]] - `contains` [EXTRACTED]
- [[setupProjectContext()]] - `contains` [EXTRACTED]
- [[types.ts_11]] - `imports_from` [EXTRACTED]
- [[uninstallCursorHooks()]] - `contains` [EXTRACTED]
- [[unregisterCursorProject()]] - `contains` [EXTRACTED]
- [[updateCursorContextForProject()]] - `contains` [EXTRACTED]
- [[worker-service.ts]] - `imports_from` [EXTRACTED]
- [[worker-utils.ts]] - `imports_from` [EXTRACTED]
- [[workerHttpRequest()]] - `imports` [EXTRACTED]
- [[writeContextFile()]] - `imports` [EXTRACTED]
- [[writeCursorRegistry()_1]] - `imports` [EXTRACTED]
- [[writeCursorRegistry()]] - `contains` [EXTRACTED]
- [[writeHooksJsonAndSetupProject()]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[CursorHooksInstaller.ts]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None