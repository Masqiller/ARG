---
source_file: "vendor/claude-mem/src/services/integrations/GeminiCliHooksInstaller.ts"
type: "code"
community: "Community None"
degree: 4
location: "L191"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# writeGeminiHooksAndSetupContext()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 4

## Architecture Graph
```mermaid
graph LR
    center["writeGeminiHooksAndSetupContext[]"]:::centerNode
    center -->|"contains"| N_vendor_claude_mem_src_services_integrations_geminiclihooksinstaller_ts["GeminiCliHooksInstaller.ts"]
    center -->|"calls"| N_integrations_geminiclihooksinstaller_writegeminisettings["writeGeminiSettings[]"]
    center -->|"calls"| N_integrations_geminiclihooksinstaller_setupgeminimdcontextsection["setupGeminiMdContextSection[]"]
    center -->|"calls"| N_integrations_geminiclihooksinstaller_installgeminiclihooks["installGeminiCliHooks[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[GeminiCliHooksInstaller.ts]] - `contains` [EXTRACTED]
- [[installGeminiCliHooks()]] - `calls` [EXTRACTED]
- [[setupGeminiMdContextSection()]] - `calls` [EXTRACTED]
- [[writeGeminiSettings()]] - `calls` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[writeGeminiHooksAndSetupContext()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None