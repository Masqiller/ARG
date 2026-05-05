---
source_file: "vendor/claude-mem/src/services/integrations/OpenCodeInstaller.ts"
type: "code"
community: "Community None"
degree: 4
location: "L17"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# getOpenCodePluginsDirectory()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 4

## Architecture Graph
```mermaid
graph LR
    center["getOpenCodePluginsDirectory[]"]:::centerNode
    center -->|"contains"| N_vendor_claude_mem_src_services_integrations_opencodeinstaller_ts["OpenCodeInstaller.ts"]
    center -->|"calls"| N_integrations_opencodeinstaller_getopencodeconfigdirectory["getOpenCodeConfigDirectory[]"]
    center -->|"calls"| N_integrations_opencodeinstaller_getinstalledpluginpath["getInstalledPluginPath[]"]
    center -->|"calls"| N_integrations_opencodeinstaller_installopencodeplugin["installOpenCodePlugin[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[OpenCodeInstaller.ts]] - `contains` [EXTRACTED]
- [[getInstalledPluginPath()]] - `calls` [EXTRACTED]
- [[getOpenCodeConfigDirectory()]] - `calls` [EXTRACTED]
- [[installOpenCodePlugin()]] - `calls` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[getOpenCodePluginsDirectory()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None