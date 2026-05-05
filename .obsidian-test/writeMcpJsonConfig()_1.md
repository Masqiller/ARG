---
source_file: "vendor/claude-mem/src/services/integrations/McpIntegrations.ts"
type: "code"
community: "Community None"
degree: 4
location: "L23"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# writeMcpJsonConfig()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 4

## Architecture Graph
```mermaid
graph LR
    center["writeMcpJsonConfig[]"]:::centerNode
    center -->|"contains"| N_vendor_claude_mem_src_services_integrations_mcpintegrations_ts["McpIntegrations.ts"]
    center -->|"calls"| N_integrations_mcpintegrations_buildmcpserverentry["buildMcpServerEntry[]"]
    center -->|"calls"| N_integrations_mcpintegrations_writemcpconfigandcontext["writeMcpConfigAndContext[]"]
    center -->|"calls"| N_utils_json_utils_readjsonsafe["readJsonSafe[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[McpIntegrations.ts]] - `contains` [EXTRACTED]
- [[buildMcpServerEntry()_1]] - `calls` [EXTRACTED]
- [[readJsonSafe()]] - `calls` [INFERRED]
- [[writeMcpConfigAndContext()]] - `calls` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[writeMcpJsonConfig()_1]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None