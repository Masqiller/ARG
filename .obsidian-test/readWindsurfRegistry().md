---
source_file: "vendor/claude-mem/src/services/integrations/WindsurfHooksInstaller.ts"
type: "code"
community: "Community None"
degree: 4
location: "L43"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# readWindsurfRegistry()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 4

## Architecture Graph
```mermaid
graph LR
    center["readWindsurfRegistry[]"]:::centerNode
    center -->|"contains"| N_vendor_claude_mem_src_services_integrations_windsurfhooksinstaller_ts["WindsurfHooksInstaller.ts"]
    center -->|"calls"| N_integrations_windsurfhooksinstaller_registerwindsurfproject["registerWindsurfProject[]"]
    center -->|"calls"| N_integrations_windsurfhooksinstaller_unregisterwindsurfproject["unregisterWindsurfProject[]"]
    center -->|"calls"| N_integrations_windsurfhooksinstaller_updatewindsurfcontextforproject["updateWindsurfContextForProject[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[WindsurfHooksInstaller.ts]] - `contains` [EXTRACTED]
- [[registerWindsurfProject()]] - `calls` [EXTRACTED]
- [[unregisterWindsurfProject()]] - `calls` [EXTRACTED]
- [[updateWindsurfContextForProject()]] - `calls` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[readWindsurfRegistry()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None