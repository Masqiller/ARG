---
source_file: "vendor/claude-mem/src/services/integrations/GeminiCliHooksInstaller.ts"
type: "code"
community: "Community None"
degree: 6
location: "L358"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# handleGeminiCliCommand()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 6

## Architecture Graph
```mermaid
graph LR
    center["handleGeminiCliCommand[]"]:::centerNode
    center -->|"imports"| N_vendor_claude_mem_src_services_worker_service_ts["worker-service.ts"]
    center -->|"calls"| N_services_worker_service_main["main[]"]
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
- [[main()_22]] - `calls` [INFERRED]
- [[uninstallGeminiCliHooks()]] - `calls` [EXTRACTED]
- [[worker-service.ts]] - `imports` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[handleGeminiCliCommand()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None