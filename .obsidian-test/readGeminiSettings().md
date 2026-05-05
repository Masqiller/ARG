---
source_file: "vendor/claude-mem/src/services/integrations/GeminiCliHooksInstaller.ts"
type: "code"
community: "Community None"
degree: 4
location: "L74"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# readGeminiSettings()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 4

## Architecture Graph
```mermaid
graph LR
    center["readGeminiSettings[]"]:::centerNode
    center -->|"contains"| N_vendor_claude_mem_src_services_integrations_geminiclihooksinstaller_ts["GeminiCliHooksInstaller.ts"]
    center -->|"calls"| N_integrations_geminiclihooksinstaller_installgeminiclihooks["installGeminiCliHooks[]"]
    center -->|"calls"| N_integrations_geminiclihooksinstaller_uninstallgeminiclihooks["uninstallGeminiCliHooks[]"]
    center -->|"calls"| N_integrations_geminiclihooksinstaller_checkgeminiclihooksstatus["checkGeminiCliHooksStatus[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[GeminiCliHooksInstaller.ts]] - `contains` [EXTRACTED]
- [[checkGeminiCliHooksStatus()]] - `calls` [EXTRACTED]
- [[installGeminiCliHooks()]] - `calls` [EXTRACTED]
- [[uninstallGeminiCliHooks()]] - `calls` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[readGeminiSettings()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None