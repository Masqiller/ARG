---
source_file: "vendor/claude-mem/src/services/integrations/CursorHooksInstaller.ts"
type: "code"
community: "Community None"
degree: 6
location: "L98"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# findWorkerServicePath()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 6

## Architecture Graph
```mermaid
graph LR
    center["findWorkerServicePath[]"]:::centerNode
    center -->|"contains"| N_vendor_claude_mem_src_services_integrations_cursorhooksinstaller_ts["CursorHooksInstaller.ts"]
    center -->|"calls"| N_integrations_cursorhooksinstaller_installcursorhooks["installCursorHooks[]"]
    center -->|"imports"| N_vendor_claude_mem_src_services_integrations_windsurfhooksinstaller_ts["WindsurfHooksInstaller.ts"]
    center -->|"imports"| N_vendor_claude_mem_src_services_integrations_geminiclihooksinstaller_ts["GeminiCliHooksInstaller.ts"]
    center -->|"calls"| N_integrations_windsurfhooksinstaller_installwindsurfhooks["installWindsurfHooks[]"]
    center -->|"calls"| N_integrations_geminiclihooksinstaller_installgeminiclihooks["installGeminiCliHooks[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[CursorHooksInstaller.ts]] - `contains` [EXTRACTED]
- [[GeminiCliHooksInstaller.ts]] - `imports` [EXTRACTED]
- [[WindsurfHooksInstaller.ts]] - `imports` [EXTRACTED]
- [[installCursorHooks()]] - `calls` [EXTRACTED]
- [[installGeminiCliHooks()]] - `calls` [INFERRED]
- [[installWindsurfHooks()]] - `calls` [INFERRED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[findWorkerServicePath()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None