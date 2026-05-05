---
source_file: "vendor/claude-mem/src/services/integrations/OpenClawInstaller.ts"
type: "code"
community: "Community None"
degree: 5
location: "L258"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# checkOpenClawStatus()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 5

## Architecture Graph
```mermaid
graph LR
    center["checkOpenClawStatus[]"]:::centerNode
    center -->|"contains"| N_vendor_claude_mem_src_services_integrations_openclawinstaller_ts["OpenClawInstaller.ts"]
    center -->|"calls"| N_integrations_openclawinstaller_getopenclawconfigdirectory["getOpenClawConfigDirectory[]"]
    center -->|"calls"| N_integrations_openclawinstaller_getopenclawclaudememextensiondirectory["getOpenClawClaudeMemExtensionDirectory[]"]
    center -->|"calls"| N_integrations_openclawinstaller_getopenclawconfigfilepath["getOpenClawConfigFilePath[]"]
    center -->|"calls"| N_integrations_openclawinstaller_readopenclawconfig["readOpenClawConfig[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[OpenClawInstaller.ts]] - `contains` [EXTRACTED]
- [[getOpenClawClaudeMemExtensionDirectory()]] - `calls` [EXTRACTED]
- [[getOpenClawConfigDirectory()]] - `calls` [EXTRACTED]
- [[getOpenClawConfigFilePath()]] - `calls` [EXTRACTED]
- [[readOpenClawConfig()]] - `calls` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[checkOpenClawStatus()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None