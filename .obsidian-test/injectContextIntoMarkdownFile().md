---
source_file: "vendor/claude-mem/src/utils/context-injection.ts"
type: "code"
community: "Community None"
degree: 7
location: "L8"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# injectContextIntoMarkdownFile()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 7

## Architecture Graph
```mermaid
graph LR
    center["injectContextIntoMarkdownFile[]"]:::centerNode
    center -->|"imports"| N_vendor_claude_mem_tests_context_injection_test_ts["context-injection.test.ts"]
    center -->|"imports"| N_vendor_claude_mem_tests_mcp_integrations_test_ts["mcp-integrations.test.ts"]
    center -->|"imports"| N_vendor_claude_mem_src_services_integrations_mcpintegrations_ts["McpIntegrations.ts"]
    center -->|"calls"| N_integrations_mcpintegrations_writemcpconfigandcontext["writeMcpConfigAndContext[]"]
    center -->|"imports"| N_vendor_claude_mem_src_services_integrations_opencodeinstaller_ts["OpenCodeInstaller.ts"]
    center -->|"calls"| N_integrations_opencodeinstaller_injectcontextintoagentsmd["injectContextIntoAgentsMd[]"]
    center -->|"contains"| N_vendor_claude_mem_src_utils_context_injection_ts["context-injection.ts"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[McpIntegrations.ts]] - `imports` [EXTRACTED]
- [[OpenCodeInstaller.ts]] - `imports` [EXTRACTED]
- [[context-injection.test.ts]] - `imports` [EXTRACTED]
- [[context-injection.ts]] - `contains` [EXTRACTED]
- [[injectContextIntoAgentsMd()]] - `calls` [INFERRED]
- [[mcp-integrations.test.ts]] - `imports` [EXTRACTED]
- [[writeMcpConfigAndContext()]] - `calls` [INFERRED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[injectContextIntoMarkdownFile()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None