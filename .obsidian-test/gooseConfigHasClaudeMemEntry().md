---
source_file: "vendor/claude-mem/src/services/integrations/McpIntegrations.ts"
type: "code"
community: "Community None"
degree: 2
location: "L170"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# gooseConfigHasClaudeMemEntry()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 2

## Architecture Graph
```mermaid
graph LR
    center["gooseConfigHasClaudeMemEntry[]"]:::centerNode
    center -->|"contains"| N_vendor_claude_mem_src_services_integrations_mcpintegrations_ts["McpIntegrations.ts"]
    center -->|"calls"| N_integrations_mcpintegrations_mergegooseyamlconfig["mergeGooseYamlConfig[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[McpIntegrations.ts]] - `contains` [EXTRACTED]
- [[mergeGooseYamlConfig()]] - `calls` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[gooseConfigHasClaudeMemEntry()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None