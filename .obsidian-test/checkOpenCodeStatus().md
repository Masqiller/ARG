---
source_file: "vendor/claude-mem/src/services/integrations/OpenCodeInstaller.ts"
type: "code"
community: "Community None"
degree: 4
location: "L197"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# checkOpenCodeStatus()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 4

## Architecture Graph
```mermaid
graph LR
    center["checkOpenCodeStatus[]"]:::centerNode
    center -->|"contains"| N_vendor_claude_mem_src_services_integrations_opencodeinstaller_ts["OpenCodeInstaller.ts"]
    center -->|"calls"| N_integrations_opencodeinstaller_getopencodeconfigdirectory["getOpenCodeConfigDirectory[]"]
    center -->|"calls"| N_integrations_opencodeinstaller_getopencodeagentsmdpath["getOpenCodeAgentsMdPath[]"]
    center -->|"calls"| N_integrations_opencodeinstaller_getinstalledpluginpath["getInstalledPluginPath[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[OpenCodeInstaller.ts]] - `contains` [EXTRACTED]
- [[getInstalledPluginPath()]] - `calls` [EXTRACTED]
- [[getOpenCodeAgentsMdPath()]] - `calls` [EXTRACTED]
- [[getOpenCodeConfigDirectory()]] - `calls` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[checkOpenCodeStatus()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None