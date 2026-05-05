---
source_file: "vendor/claude-mem/src/services/integrations/OpenCodeInstaller.ts"
type: "code"
community: "Community None"
degree: 6
location: "L21"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# getOpenCodeAgentsMdPath()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 6

## Architecture Graph
```mermaid
graph LR
    center["getOpenCodeAgentsMdPath[]"]:::centerNode
    center -->|"contains"| N_vendor_claude_mem_src_services_integrations_opencodeinstaller_ts["OpenCodeInstaller.ts"]
    center -->|"calls"| N_integrations_opencodeinstaller_getopencodeconfigdirectory["getOpenCodeConfigDirectory[]"]
    center -->|"calls"| N_integrations_opencodeinstaller_injectcontextintoagentsmd["injectContextIntoAgentsMd[]"]
    center -->|"calls"| N_integrations_opencodeinstaller_uninstallopencodeplugin["uninstallOpenCodePlugin[]"]
    center -->|"calls"| N_integrations_opencodeinstaller_checkopencodestatus["checkOpenCodeStatus[]"]
    center -->|"calls"| N_integrations_opencodeinstaller_installopencodeintegration["installOpenCodeIntegration[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[OpenCodeInstaller.ts]] - `contains` [EXTRACTED]
- [[checkOpenCodeStatus()]] - `calls` [EXTRACTED]
- [[getOpenCodeConfigDirectory()]] - `calls` [EXTRACTED]
- [[injectContextIntoAgentsMd()]] - `calls` [EXTRACTED]
- [[installOpenCodeIntegration()]] - `calls` [EXTRACTED]
- [[uninstallOpenCodePlugin()]] - `calls` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[getOpenCodeAgentsMdPath()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None