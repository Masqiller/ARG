---
source_file: "vendor/claude-mem/src/services/integrations/McpIntegrations.ts"
type: "code"
community: "Community None"
degree: 4
location: "L194"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# installGooseMcpIntegration()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 4

## Architecture Graph
```mermaid
graph LR
    center["installGooseMcpIntegration[]"]:::centerNode
    center -->|"calls"| N_integrations_cursorhooksinstaller_findmcpserverpath["findMcpServerPath[]"]
    center -->|"contains"| N_vendor_claude_mem_src_services_integrations_mcpintegrations_ts["McpIntegrations.ts"]
    center -->|"calls"| N_integrations_mcpintegrations_getgooseconfigpath["getGooseConfigPath[]"]
    center -->|"calls"| N_integrations_mcpintegrations_mergegooseyamlconfig["mergeGooseYamlConfig[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[McpIntegrations.ts]] - `contains` [EXTRACTED]
- [[findMcpServerPath()]] - `calls` [INFERRED]
- [[getGooseConfigPath()]] - `calls` [EXTRACTED]
- [[mergeGooseYamlConfig()]] - `calls` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[installGooseMcpIntegration()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None