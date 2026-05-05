---
source_file: "vendor/claude-mem/src/services/integrations/OpenClawInstaller.ts"
type: "code"
community: "Community None"
degree: 2
location: "L32"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# findPreBuiltPluginDirectory()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 2

## Architecture Graph
```mermaid
graph LR
    center["findPreBuiltPluginDirectory[]"]:::centerNode
    center -->|"contains"| N_vendor_claude_mem_src_services_integrations_openclawinstaller_ts["OpenClawInstaller.ts"]
    center -->|"calls"| N_integrations_openclawinstaller_installopenclawplugin["installOpenClawPlugin[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[OpenClawInstaller.ts]] - `contains` [EXTRACTED]
- [[installOpenClawPlugin()]] - `calls` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[findPreBuiltPluginDirectory()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None