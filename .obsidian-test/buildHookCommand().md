---
source_file: "vendor/claude-mem/src/services/integrations/WindsurfHooksInstaller.ts"
type: "code"
community: "Community None"
degree: 2
location: "L134"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# buildHookCommand()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 2

## Architecture Graph
```mermaid
graph LR
    center["buildHookCommand[]"]:::centerNode
    center -->|"contains"| N_vendor_claude_mem_src_services_integrations_windsurfhooksinstaller_ts["WindsurfHooksInstaller.ts"]
    center -->|"calls"| N_integrations_windsurfhooksinstaller_mergeandwritehooksjson["mergeAndWriteHooksJson[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[WindsurfHooksInstaller.ts]] - `contains` [EXTRACTED]
- [[mergeAndWriteHooksJson()]] - `calls` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[buildHookCommand()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None