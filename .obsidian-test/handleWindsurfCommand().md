---
source_file: "vendor/claude-mem/src/services/integrations/WindsurfHooksInstaller.ts"
type: "code"
community: "Community None"
degree: 4
location: "L425"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# handleWindsurfCommand()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 4

## Architecture Graph
```mermaid
graph LR
    center["handleWindsurfCommand[]"]:::centerNode
    center -->|"contains"| N_vendor_claude_mem_src_services_integrations_windsurfhooksinstaller_ts["WindsurfHooksInstaller.ts"]
    center -->|"calls"| N_integrations_windsurfhooksinstaller_installwindsurfhooks["installWindsurfHooks[]"]
    center -->|"calls"| N_integrations_windsurfhooksinstaller_uninstallwindsurfhooks["uninstallWindsurfHooks[]"]
    center -->|"calls"| N_integrations_windsurfhooksinstaller_checkwindsurfhooksstatus["checkWindsurfHooksStatus[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[WindsurfHooksInstaller.ts]] - `contains` [EXTRACTED]
- [[checkWindsurfHooksStatus()]] - `calls` [EXTRACTED]
- [[installWindsurfHooks()]] - `calls` [EXTRACTED]
- [[uninstallWindsurfHooks()]] - `calls` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[handleWindsurfCommand()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None