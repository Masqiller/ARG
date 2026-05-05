---
source_file: "vendor/claude-mem/src/services/integrations/OpenCodeInstaller.ts"
type: "code"
community: "Community None"
degree: 6
location: "L25"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# getInstalledPluginPath()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 6

## Architecture Graph
```mermaid
graph LR
    center["getInstalledPluginPath[]"]:::centerNode
    center -->|"contains"| N_vendor_claude_mem_src_services_integrations_opencodeinstaller_ts["OpenCodeInstaller.ts"]
    center -->|"calls"| N_integrations_opencodeinstaller_getopencodepluginsdirectory["getOpenCodePluginsDirectory[]"]
    center -->|"calls"| N_integrations_opencodeinstaller_installopencodeplugin["installOpenCodePlugin[]"]
    center -->|"calls"| N_integrations_opencodeinstaller_uninstallopencodeplugin["uninstallOpenCodePlugin[]"]
    center -->|"calls"| N_integrations_opencodeinstaller_checkopencodestatus["checkOpenCodeStatus[]"]
    center -->|"calls"| N_integrations_opencodeinstaller_installopencodeintegration["installOpenCodeIntegration[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[OpenCodeInstaller.ts]] - `contains` [EXTRACTED]
- [[checkOpenCodeStatus()]] - `calls` [EXTRACTED]
- [[getOpenCodePluginsDirectory()]] - `calls` [EXTRACTED]
- [[installOpenCodeIntegration()]] - `calls` [EXTRACTED]
- [[installOpenCodePlugin()]] - `calls` [EXTRACTED]
- [[uninstallOpenCodePlugin()]] - `calls` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[getInstalledPluginPath()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None