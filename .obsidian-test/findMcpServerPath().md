---
source_file: "vendor/claude-mem/src/services/integrations/CursorHooksInstaller.ts"
type: "code"
community: "Community None"
degree: 4
location: "L84"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# findMcpServerPath()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 4

## Architecture Graph
```mermaid
graph LR
    center["findMcpServerPath[]"]:::centerNode
    center -->|"contains"| N_vendor_claude_mem_src_services_integrations_cursorhooksinstaller_ts["CursorHooksInstaller.ts"]
    center -->|"calls"| N_integrations_cursorhooksinstaller_configurecursormcp["configureCursorMcp[]"]
    center -->|"imports"| N_vendor_claude_mem_src_services_integrations_mcpintegrations_ts["McpIntegrations.ts"]
    center -->|"calls"| N_integrations_mcpintegrations_installgoosemcpintegration["installGooseMcpIntegration[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[CursorHooksInstaller.ts]] - `contains` [EXTRACTED]
- [[McpIntegrations.ts]] - `imports` [EXTRACTED]
- [[configureCursorMcp()]] - `calls` [EXTRACTED]
- [[installGooseMcpIntegration()]] - `calls` [INFERRED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[findMcpServerPath()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None