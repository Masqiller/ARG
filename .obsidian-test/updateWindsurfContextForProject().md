---
source_file: "vendor/claude-mem/src/services/integrations/WindsurfHooksInstaller.ts"
type: "code"
community: "Community None"
degree: 3
location: "L81"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# updateWindsurfContextForProject()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 3

## Architecture Graph
```mermaid
graph LR
    center["updateWindsurfContextForProject[]"]:::centerNode
    center -->|"contains"| N_vendor_claude_mem_src_services_integrations_windsurfhooksinstaller_ts["WindsurfHooksInstaller.ts"]
    center -->|"calls"| N_integrations_windsurfhooksinstaller_readwindsurfregistry["readWindsurfRegistry[]"]
    center -->|"calls"| N_integrations_windsurfhooksinstaller_writewindsurfcontextfile["writeWindsurfContextFile[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[WindsurfHooksInstaller.ts]] - `contains` [EXTRACTED]
- [[readWindsurfRegistry()]] - `calls` [EXTRACTED]
- [[writeWindsurfContextFile()]] - `calls` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[updateWindsurfContextForProject()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None