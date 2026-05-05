---
source_file: "vendor/claude-mem/src/services/integrations/GeminiCliHooksInstaller.ts"
type: "code"
community: "Community None"
degree: 9
location: "L158"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# installGeminiCliHooks()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 9

## Architecture Graph
```mermaid
graph LR
    center["installGeminiCliHooks[]"]:::centerNode
    center -->|"calls"| N_integrations_cursorhooksinstaller_findworkerservicepath["findWorkerServicePath[]"]
    center -->|"calls"| N_integrations_cursorhooksinstaller_findbunpath["findBunPath[]"]
    center -->|"contains"| N_vendor_claude_mem_src_services_integrations_geminiclihooksinstaller_ts["GeminiCliHooksInstaller.ts"]
    center -->|"calls"| N_integrations_geminiclihooksinstaller_buildhookcommand["buildHookCommand[]"]
    center -->|"calls"| N_integrations_geminiclihooksinstaller_createhookgroup["createHookGroup[]"]
    center -->|"calls"| N_integrations_geminiclihooksinstaller_readgeminisettings["readGeminiSettings[]"]
    center -->|"calls"| N_integrations_geminiclihooksinstaller_mergehooksintosettings["mergeHooksIntoSettings[]"]
    center -->|"calls"| N_integrations_geminiclihooksinstaller_writegeminihooksandsetupcontext["writeGeminiHooksAndSetupContext[]"]
    center -->|"calls"| N_integrations_geminiclihooksinstaller_handlegeminiclicommand["handleGeminiCliCommand[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[GeminiCliHooksInstaller.ts]] - `contains` [EXTRACTED]
- [[buildHookCommand()_1]] - `calls` [EXTRACTED]
- [[createHookGroup()]] - `calls` [EXTRACTED]
- [[findBunPath()]] - `calls` [INFERRED]
- [[findWorkerServicePath()]] - `calls` [INFERRED]
- [[handleGeminiCliCommand()]] - `calls` [EXTRACTED]
- [[mergeHooksIntoSettings()]] - `calls` [EXTRACTED]
- [[readGeminiSettings()]] - `calls` [EXTRACTED]
- [[writeGeminiHooksAndSetupContext()]] - `calls` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[installGeminiCliHooks()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None