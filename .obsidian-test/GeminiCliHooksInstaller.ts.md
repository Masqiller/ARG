---
source_file: "vendor/claude-mem/src/services/integrations/GeminiCliHooksInstaller.ts"
type: "code"
community: "Community None"
degree: 18
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# GeminiCliHooksInstaller.ts

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 18

## Architecture Graph
```mermaid
graph LR
    center["GeminiCliHooksInstaller.ts"]:::centerNode
    center -->|"imports_from"| N_vendor_claude_mem_src_services_worker_service_ts["worker-service.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_services_integrations_cursorhooksinstaller_ts["CursorHooksInstaller.ts"]
    center -->|"imports"| N_integrations_cursorhooksinstaller_findworkerservicepath["findWorkerServicePath[]"]
    center -->|"imports"| N_integrations_cursorhooksinstaller_findbunpath["findBunPath[]"]
    center -->|"imports_from"| N_vendor_claude_mem_src_utils_logger_ts["logger.ts"]
    center -->|"imports"| N_utils_logger_logger["Logger"]
    center -->|"contains"| N_integrations_geminiclihooksinstaller_buildhookcommand["buildHookCommand[]"]
    center -->|"contains"| N_integrations_geminiclihooksinstaller_createhookgroup["createHookGroup[]"]
    center -->|"contains"| N_integrations_geminiclihooksinstaller_readgeminisettings["readGeminiSettings[]"]
    center -->|"contains"| N_integrations_geminiclihooksinstaller_writegeminisettings["writeGeminiSettings[]"]
    center -->|"contains"| N_integrations_geminiclihooksinstaller_mergehooksintosettings["mergeHooksIntoSettings[]"]
    center -->|"contains"| N_integrations_geminiclihooksinstaller_setupgeminimdcontextsection["setupGeminiMdContextSection[]"]
    center -->|"contains"| N_integrations_geminiclihooksinstaller_installgeminiclihooks["installGeminiCliHooks[]"]
    center -->|"contains"| N_integrations_geminiclihooksinstaller_writegeminihooksandsetupcontext["writeGeminiHooksAndSetupContext[]"]
    center -->|"contains"| N_integrations_geminiclihooksinstaller_uninstallgeminiclihooks["uninstallGeminiCliHooks[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[CursorHooksInstaller.ts]] - `imports_from` [EXTRACTED]
- [[Logger]] - `imports` [EXTRACTED]
- [[buildHookCommand()_1]] - `contains` [EXTRACTED]
- [[checkGeminiCliHooksStatus()]] - `contains` [EXTRACTED]
- [[createHookGroup()]] - `contains` [EXTRACTED]
- [[findBunPath()]] - `imports` [EXTRACTED]
- [[findWorkerServicePath()]] - `imports` [EXTRACTED]
- [[handleGeminiCliCommand()]] - `contains` [EXTRACTED]
- [[installGeminiCliHooks()]] - `contains` [EXTRACTED]
- [[logger.ts]] - `imports_from` [EXTRACTED]
- [[mergeHooksIntoSettings()]] - `contains` [EXTRACTED]
- [[readGeminiSettings()]] - `contains` [EXTRACTED]
- [[setupGeminiMdContextSection()]] - `contains` [EXTRACTED]
- [[uninstallGeminiCliHooks()]] - `contains` [EXTRACTED]
- [[worker-service.ts]] - `imports_from` [EXTRACTED]
- [[writeGeminiHooksAndSetupContext()]] - `contains` [EXTRACTED]
- [[writeGeminiSettings()]] - `contains` [EXTRACTED]
- [[writeSettingsAndCleanupGeminiContext()]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[GeminiCliHooksInstaller.ts]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None