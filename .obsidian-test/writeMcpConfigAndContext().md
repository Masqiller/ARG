---
source_file: "vendor/claude-mem/src/services/integrations/McpIntegrations.ts"
type: "code"
community: "Community None"
degree: 3
location: "L84"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# writeMcpConfigAndContext()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 3

## Architecture Graph
```mermaid
graph LR
    center["writeMcpConfigAndContext[]"]:::centerNode
    center -->|"contains"| N_vendor_claude_mem_src_services_integrations_mcpintegrations_ts["McpIntegrations.ts"]
    center -->|"calls"| N_integrations_mcpintegrations_writemcpjsonconfig["writeMcpJsonConfig[]"]
    center -->|"calls"| N_utils_context_injection_injectcontextintomarkdownfile["injectContextIntoMarkdownFile[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[McpIntegrations.ts]] - `contains` [EXTRACTED]
- [[injectContextIntoMarkdownFile()]] - `calls` [INFERRED]
- [[writeMcpJsonConfig()_1]] - `calls` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[writeMcpConfigAndContext()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None