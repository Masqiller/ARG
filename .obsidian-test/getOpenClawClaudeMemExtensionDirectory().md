---
source_file: "vendor/claude-mem/src/services/integrations/OpenClawInstaller.ts"
type: "code"
community: "Community None"
degree: 6
location: "L24"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# getOpenClawClaudeMemExtensionDirectory()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 6

## Architecture Graph
```mermaid
graph LR
    center["getOpenClawClaudeMemExtensionDirectory[]"]:::centerNode
    center -->|"contains"| N_vendor_claude_mem_src_services_integrations_openclawinstaller_ts["OpenClawInstaller.ts"]
    center -->|"calls"| N_integrations_openclawinstaller_getopenclawextensionsdirectory["getOpenClawExtensionsDirectory[]"]
    center -->|"calls"| N_integrations_openclawinstaller_installopenclawplugin["installOpenClawPlugin[]"]
    center -->|"calls"| N_integrations_openclawinstaller_uninstallopenclawplugin["uninstallOpenClawPlugin[]"]
    center -->|"calls"| N_integrations_openclawinstaller_checkopenclawstatus["checkOpenClawStatus[]"]
    center -->|"calls"| N_integrations_openclawinstaller_installopenclawintegration["installOpenClawIntegration[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[OpenClawInstaller.ts]] - `contains` [EXTRACTED]
- [[checkOpenClawStatus()]] - `calls` [EXTRACTED]
- [[getOpenClawExtensionsDirectory()]] - `calls` [EXTRACTED]
- [[installOpenClawIntegration()]] - `calls` [EXTRACTED]
- [[installOpenClawPlugin()]] - `calls` [EXTRACTED]
- [[uninstallOpenClawPlugin()]] - `calls` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[getOpenClawClaudeMemExtensionDirectory()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None