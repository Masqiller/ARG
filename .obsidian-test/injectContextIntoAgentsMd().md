---
source_file: "vendor/claude-mem/src/services/integrations/OpenCodeInstaller.ts"
type: "code"
community: "Community None"
degree: 5
location: "L76"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# injectContextIntoAgentsMd()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 5

## Architecture Graph
```mermaid
graph LR
    center["injectContextIntoAgentsMd[]"]:::centerNode
    center -->|"contains"| N_vendor_claude_mem_src_services_integrations_opencodeinstaller_ts["OpenCodeInstaller.ts"]
    center -->|"calls"| N_integrations_opencodeinstaller_getopencodeagentsmdpath["getOpenCodeAgentsMdPath[]"]
    center -->|"calls"| N_integrations_opencodeinstaller_fetchandinjectopencodecontext["fetchAndInjectOpenCodeContext[]"]
    center -->|"calls"| N_integrations_opencodeinstaller_installopencodeintegration["installOpenCodeIntegration[]"]
    center -->|"calls"| N_utils_context_injection_injectcontextintomarkdownfile["injectContextIntoMarkdownFile[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[OpenCodeInstaller.ts]] - `contains` [EXTRACTED]
- [[fetchAndInjectOpenCodeContext()]] - `calls` [EXTRACTED]
- [[getOpenCodeAgentsMdPath()]] - `calls` [EXTRACTED]
- [[injectContextIntoMarkdownFile()]] - `calls` [INFERRED]
- [[installOpenCodeIntegration()]] - `calls` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[injectContextIntoAgentsMd()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None