---
source_file: "vendor/claude-mem/src/services/integrations/WindsurfHooksInstaller.ts"
type: "code"
community: "Community None"
degree: 25
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# WindsurfHooksInstaller.ts

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 25

## Architecture Graph
```mermaid
graph LR
    center["WindsurfHooksInstaller.ts"]:::centerNode
    center -->|"imports_from"| N_vendor_claude_mem_src_shared_worker_utils_ts["worker-utils.ts"]
    center -->|"imports"| N_shared_worker_utils_getworkerport["getWorkerPort[]"]
    center -->|"imports_from"| N_vendor_claude_mem_src_shared_paths_ts["paths.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_services_integrations_cursorhooksinstaller_ts["CursorHooksInstaller.ts"]
    center -->|"imports"| N_integrations_cursorhooksinstaller_findworkerservicepath["findWorkerServicePath[]"]
    center -->|"imports"| N_integrations_cursorhooksinstaller_findbunpath["findBunPath[]"]
    center -->|"imports_from"| N_vendor_claude_mem_src_utils_logger_ts["logger.ts"]
    center -->|"imports"| N_utils_logger_logger["Logger"]
    center -->|"contains"| N_integrations_windsurfhooksinstaller_readwindsurfregistry["readWindsurfRegistry[]"]
    center -->|"contains"| N_integrations_windsurfhooksinstaller_writewindsurfregistry["writeWindsurfRegistry[]"]
    center -->|"contains"| N_integrations_windsurfhooksinstaller_registerwindsurfproject["registerWindsurfProject[]"]
    center -->|"contains"| N_integrations_windsurfhooksinstaller_unregisterwindsurfproject["unregisterWindsurfProject[]"]
    center -->|"contains"| N_integrations_windsurfhooksinstaller_updatewindsurfcontextforproject["updateWindsurfContextForProject[]"]
    center -->|"contains"| N_integrations_windsurfhooksinstaller_writewindsurfcontextfile["writeWindsurfContextFile[]"]
    center -->|"contains"| N_integrations_windsurfhooksinstaller_buildhookcommand["buildHookCommand[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[CursorHooksInstaller.ts]] - `imports_from` [EXTRACTED]
- [[Logger]] - `imports` [EXTRACTED]
- [[buildHookCommand()]] - `contains` [EXTRACTED]
- [[checkWindsurfHooksStatus()]] - `contains` [EXTRACTED]
- [[fetchWindsurfContextFromWorker()]] - `contains` [EXTRACTED]
- [[findBunPath()]] - `imports` [EXTRACTED]
- [[findWorkerServicePath()]] - `imports` [EXTRACTED]
- [[getWorkerPort()]] - `imports` [EXTRACTED]
- [[handleWindsurfCommand()]] - `contains` [EXTRACTED]
- [[installWindsurfHooks()]] - `contains` [EXTRACTED]
- [[logger.ts]] - `imports_from` [EXTRACTED]
- [[mergeAndWriteHooksJson()]] - `contains` [EXTRACTED]
- [[paths.ts]] - `imports_from` [EXTRACTED]
- [[readWindsurfRegistry()]] - `contains` [EXTRACTED]
- [[registerWindsurfProject()]] - `contains` [EXTRACTED]
- [[removeClaudeMemHookEntries()]] - `contains` [EXTRACTED]
- [[removeWindsurfContextAndUnregister()]] - `contains` [EXTRACTED]
- [[setupWindsurfProjectContext()]] - `contains` [EXTRACTED]
- [[uninstallWindsurfHooks()]] - `contains` [EXTRACTED]
- [[unregisterWindsurfProject()]] - `contains` [EXTRACTED]
- [[updateWindsurfContextForProject()]] - `contains` [EXTRACTED]
- [[worker-utils.ts]] - `imports_from` [EXTRACTED]
- [[writeWindsurfContextFile()]] - `contains` [EXTRACTED]
- [[writeWindsurfHooksAndSetupContext()]] - `contains` [EXTRACTED]
- [[writeWindsurfRegistry()]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[WindsurfHooksInstaller.ts]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None