---
source_file: "vendor/claude-mem/src/services/integrations/WindsurfHooksInstaller.ts"
type: "code"
community: "Community None"
degree: 4
location: "L72"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# unregisterWindsurfProject()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 4

## Architecture Graph
```mermaid
graph LR
    center["unregisterWindsurfProject[]"]:::centerNode
    center -->|"contains"| N_vendor_claude_mem_src_services_integrations_windsurfhooksinstaller_ts["WindsurfHooksInstaller.ts"]
    center -->|"calls"| N_integrations_windsurfhooksinstaller_readwindsurfregistry["readWindsurfRegistry[]"]
    center -->|"calls"| N_integrations_windsurfhooksinstaller_writewindsurfregistry["writeWindsurfRegistry[]"]
    center -->|"calls"| N_integrations_windsurfhooksinstaller_removewindsurfcontextandunregister["removeWindsurfContextAndUnregister[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[WindsurfHooksInstaller.ts]] - `contains` [EXTRACTED]
- [[readWindsurfRegistry()]] - `calls` [EXTRACTED]
- [[removeWindsurfContextAndUnregister()]] - `calls` [EXTRACTED]
- [[writeWindsurfRegistry()]] - `calls` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[unregisterWindsurfProject()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None