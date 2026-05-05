---
source_file: "vendor/claude-mem/src/services/integrations/WindsurfHooksInstaller.ts"
type: "code"
community: "Community None"
degree: 4
location: "L225"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# writeWindsurfHooksAndSetupContext()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 4

## Architecture Graph
```mermaid
graph LR
    center["writeWindsurfHooksAndSetupContext[]"]:::centerNode
    center -->|"contains"| N_vendor_claude_mem_src_services_integrations_windsurfhooksinstaller_ts["WindsurfHooksInstaller.ts"]
    center -->|"calls"| N_integrations_windsurfhooksinstaller_mergeandwritehooksjson["mergeAndWriteHooksJson[]"]
    center -->|"calls"| N_integrations_windsurfhooksinstaller_installwindsurfhooks["installWindsurfHooks[]"]
    center -->|"calls"| N_integrations_windsurfhooksinstaller_setupwindsurfprojectcontext["setupWindsurfProjectContext[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[WindsurfHooksInstaller.ts]] - `contains` [EXTRACTED]
- [[installWindsurfHooks()]] - `calls` [EXTRACTED]
- [[mergeAndWriteHooksJson()]] - `calls` [EXTRACTED]
- [[setupWindsurfProjectContext()]] - `calls` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[writeWindsurfHooksAndSetupContext()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None