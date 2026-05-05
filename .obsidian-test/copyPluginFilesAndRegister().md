---
source_file: "vendor/claude-mem/src/services/integrations/OpenClawInstaller.ts"
type: "code"
community: "Community None"
degree: 3
location: "L195"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# copyPluginFilesAndRegister()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 3

## Architecture Graph
```mermaid
graph LR
    center["copyPluginFilesAndRegister[]"]:::centerNode
    center -->|"contains"| N_vendor_claude_mem_src_services_integrations_openclawinstaller_ts["OpenClawInstaller.ts"]
    center -->|"calls"| N_integrations_openclawinstaller_registerplugininopenclawconfig["registerPluginInOpenClawConfig[]"]
    center -->|"calls"| N_integrations_openclawinstaller_installopenclawplugin["installOpenClawPlugin[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[OpenClawInstaller.ts]] - `contains` [EXTRACTED]
- [[installOpenClawPlugin()]] - `calls` [EXTRACTED]
- [[registerPluginInOpenClawConfig()]] - `calls` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[copyPluginFilesAndRegister()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None