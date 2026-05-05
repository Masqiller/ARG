---
source_file: "vendor/claude-mem/src/services/integrations/McpIntegrations.ts"
type: "code"
community: "Community None"
degree: 5
location: "L218"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# mergeGooseYamlConfig()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 5

## Architecture Graph
```mermaid
graph LR
    center["mergeGooseYamlConfig[]"]:::centerNode
    center -->|"contains"| N_vendor_claude_mem_src_services_integrations_mcpintegrations_ts["McpIntegrations.ts"]
    center -->|"calls"| N_integrations_mcpintegrations_gooseconfighasclaudemementry["gooseConfigHasClaudeMemEntry[]"]
    center -->|"calls"| N_integrations_mcpintegrations_buildgoosemcpyamlblock["buildGooseMcpYamlBlock[]"]
    center -->|"calls"| N_integrations_mcpintegrations_buildgooseclaudemementryyaml["buildGooseClaudeMemEntryYaml[]"]
    center -->|"calls"| N_integrations_mcpintegrations_installgoosemcpintegration["installGooseMcpIntegration[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[McpIntegrations.ts]] - `contains` [EXTRACTED]
- [[buildGooseClaudeMemEntryYaml()]] - `calls` [EXTRACTED]
- [[buildGooseMcpYamlBlock()]] - `calls` [EXTRACTED]
- [[gooseConfigHasClaudeMemEntry()]] - `calls` [EXTRACTED]
- [[installGooseMcpIntegration()]] - `calls` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[mergeGooseYamlConfig()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None