---
source_file: "vendor/claude-mem/src/services/integrations/OpenCodeInstaller.ts"
type: "code"
community: "Community None"
degree: 2
location: "L90"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# syncContextToAgentsMd()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 2

## Architecture Graph
```mermaid
graph LR
    center["syncContextToAgentsMd[]"]:::centerNode
    center -->|"contains"| N_vendor_claude_mem_src_services_integrations_opencodeinstaller_ts["OpenCodeInstaller.ts"]
    center -->|"calls"| N_integrations_opencodeinstaller_fetchandinjectopencodecontext["fetchAndInjectOpenCodeContext[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[OpenCodeInstaller.ts]] - `contains` [EXTRACTED]
- [[fetchAndInjectOpenCodeContext()]] - `calls` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[syncContextToAgentsMd()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None