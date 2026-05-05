---
source_file: "vendor/claude-mem/src/services/integrations/OpenCodeInstaller.ts"
type: "code"
community: "Community None"
degree: 20
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# OpenCodeInstaller.ts

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 20

## Architecture Graph
```mermaid
graph LR
    center["OpenCodeInstaller.ts"]:::centerNode
    center -->|"imports_from"| N_vendor_claude_mem_src_shared_worker_utils_ts["worker-utils.ts"]
    center -->|"imports"| N_shared_worker_utils_getworkerport["getWorkerPort[]"]
    center -->|"imports_from"| N_vendor_claude_mem_src_utils_logger_ts["logger.ts"]
    center -->|"imports"| N_utils_logger_logger["Logger"]
    center -->|"imports_from"| N_vendor_claude_mem_src_utils_context_injection_ts["context-injection.ts"]
    center -->|"imports"| N_utils_context_injection_injectcontextintomarkdownfile["injectContextIntoMarkdownFile[]"]
    center -->|"contains"| N_integrations_opencodeinstaller_getopencodeconfigdirectory["getOpenCodeConfigDirectory[]"]
    center -->|"contains"| N_integrations_opencodeinstaller_getopencodepluginsdirectory["getOpenCodePluginsDirectory[]"]
    center -->|"contains"| N_integrations_opencodeinstaller_getopencodeagentsmdpath["getOpenCodeAgentsMdPath[]"]
    center -->|"contains"| N_integrations_opencodeinstaller_getinstalledpluginpath["getInstalledPluginPath[]"]
    center -->|"contains"| N_integrations_opencodeinstaller_findbuiltpluginpath["findBuiltPluginPath[]"]
    center -->|"contains"| N_integrations_opencodeinstaller_installopencodeplugin["installOpenCodePlugin[]"]
    center -->|"contains"| N_integrations_opencodeinstaller_injectcontextintoagentsmd["injectContextIntoAgentsMd[]"]
    center -->|"contains"| N_integrations_opencodeinstaller_synccontexttoagentsmd["syncContextToAgentsMd[]"]
    center -->|"contains"| N_integrations_opencodeinstaller_fetchrealcontextfromworker["fetchRealContextFromWorker[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[Logger]] - `imports` [EXTRACTED]
- [[checkOpenCodeStatus()]] - `contains` [EXTRACTED]
- [[context-injection.ts]] - `imports_from` [EXTRACTED]
- [[fetchAndInjectOpenCodeContext()]] - `contains` [EXTRACTED]
- [[fetchRealContextFromWorker()]] - `contains` [EXTRACTED]
- [[findBuiltPluginPath()]] - `contains` [EXTRACTED]
- [[getInstalledPluginPath()]] - `contains` [EXTRACTED]
- [[getOpenCodeAgentsMdPath()]] - `contains` [EXTRACTED]
- [[getOpenCodeConfigDirectory()]] - `contains` [EXTRACTED]
- [[getOpenCodePluginsDirectory()]] - `contains` [EXTRACTED]
- [[getWorkerPort()]] - `imports` [EXTRACTED]
- [[injectContextIntoAgentsMd()]] - `contains` [EXTRACTED]
- [[injectContextIntoMarkdownFile()]] - `imports` [EXTRACTED]
- [[installOpenCodeIntegration()]] - `contains` [EXTRACTED]
- [[installOpenCodePlugin()]] - `contains` [EXTRACTED]
- [[logger.ts]] - `imports_from` [EXTRACTED]
- [[syncContextToAgentsMd()]] - `contains` [EXTRACTED]
- [[uninstallOpenCodePlugin()]] - `contains` [EXTRACTED]
- [[worker-utils.ts]] - `imports_from` [EXTRACTED]
- [[writeOrRemoveCleanedAgentsMd()]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[OpenCodeInstaller.ts]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None