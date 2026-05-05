---
source_file: "vendor/claude-mem/src/utils/context-injection.ts"
type: "code"
community: "Community None"
degree: 3
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# context-injection.ts

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 3

## Architecture Graph
```mermaid
graph LR
    center["context-injection.ts"]:::centerNode
    center -->|"imports_from"| N_vendor_claude_mem_src_services_integrations_mcpintegrations_ts["McpIntegrations.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_services_integrations_opencodeinstaller_ts["OpenCodeInstaller.ts"]
    center -->|"contains"| N_utils_context_injection_injectcontextintomarkdownfile["injectContextIntoMarkdownFile[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[McpIntegrations.ts]] - `imports_from` [EXTRACTED]
- [[OpenCodeInstaller.ts]] - `imports_from` [EXTRACTED]
- [[injectContextIntoMarkdownFile()]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[context-injection.ts]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None