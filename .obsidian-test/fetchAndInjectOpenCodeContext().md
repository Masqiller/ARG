---
source_file: "vendor/claude-mem/src/services/integrations/OpenCodeInstaller.ts"
type: "code"
community: "Community None"
degree: 3
location: "L119"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# fetchAndInjectOpenCodeContext()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 3

## Architecture Graph
```mermaid
graph LR
    center["fetchAndInjectOpenCodeContext[]"]:::centerNode
    center -->|"contains"| N_vendor_claude_mem_src_services_integrations_opencodeinstaller_ts["OpenCodeInstaller.ts"]
    center -->|"calls"| N_integrations_opencodeinstaller_injectcontextintoagentsmd["injectContextIntoAgentsMd[]"]
    center -->|"calls"| N_integrations_opencodeinstaller_synccontexttoagentsmd["syncContextToAgentsMd[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[OpenCodeInstaller.ts]] - `contains` [EXTRACTED]
- [[injectContextIntoAgentsMd()]] - `calls` [EXTRACTED]
- [[syncContextToAgentsMd()]] - `calls` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[fetchAndInjectOpenCodeContext()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None