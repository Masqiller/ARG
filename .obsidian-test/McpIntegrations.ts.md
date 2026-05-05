---
source_file: "vendor/claude-mem/src/services/integrations/McpIntegrations.ts"
type: "code"
community: "Community None"
degree: 18
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# McpIntegrations.ts

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 18

## Architecture Graph
```mermaid
graph LR
    center["McpIntegrations.ts"]:::centerNode
    center -->|"imports_from"| N_vendor_claude_mem_src_services_integrations_cursorhooksinstaller_ts["CursorHooksInstaller.ts"]
    center -->|"imports"| N_integrations_cursorhooksinstaller_findmcpserverpath["findMcpServerPath[]"]
    center -->|"imports_from"| N_vendor_claude_mem_src_utils_logger_ts["logger.ts"]
    center -->|"imports"| N_utils_logger_logger["Logger"]
    center -->|"imports_from"| N_vendor_claude_mem_src_utils_json_utils_ts["json-utils.ts"]
    center -->|"imports"| N_utils_json_utils_readjsonsafe["readJsonSafe[]"]
    center -->|"imports_from"| N_vendor_claude_mem_src_utils_context_injection_ts["context-injection.ts"]
    center -->|"imports"| N_utils_context_injection_injectcontextintomarkdownfile["injectContextIntoMarkdownFile[]"]
    center -->|"contains"| N_integrations_mcpintegrations_buildmcpserverentry["buildMcpServerEntry[]"]
    center -->|"contains"| N_integrations_mcpintegrations_writemcpjsonconfig["writeMcpJsonConfig[]"]
    center -->|"contains"| N_integrations_mcpintegrations_installmcpintegration["installMcpIntegration[]"]
    center -->|"contains"| N_integrations_mcpintegrations_writemcpconfigandcontext["writeMcpConfigAndContext[]"]
    center -->|"contains"| N_integrations_mcpintegrations_getgooseconfigpath["getGooseConfigPath[]"]
    center -->|"contains"| N_integrations_mcpintegrations_gooseconfighasclaudemementry["gooseConfigHasClaudeMemEntry[]"]
    center -->|"contains"| N_integrations_mcpintegrations_buildgoosemcpyamlblock["buildGooseMcpYamlBlock[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[CursorHooksInstaller.ts]] - `imports_from` [EXTRACTED]
- [[Logger]] - `imports` [EXTRACTED]
- [[buildGooseClaudeMemEntryYaml()]] - `contains` [EXTRACTED]
- [[buildGooseMcpYamlBlock()]] - `contains` [EXTRACTED]
- [[buildMcpServerEntry()_1]] - `contains` [EXTRACTED]
- [[context-injection.ts]] - `imports_from` [EXTRACTED]
- [[findMcpServerPath()]] - `imports` [EXTRACTED]
- [[getGooseConfigPath()]] - `contains` [EXTRACTED]
- [[gooseConfigHasClaudeMemEntry()]] - `contains` [EXTRACTED]
- [[injectContextIntoMarkdownFile()]] - `imports` [EXTRACTED]
- [[installGooseMcpIntegration()]] - `contains` [EXTRACTED]
- [[installMcpIntegration()]] - `contains` [EXTRACTED]
- [[json-utils.ts]] - `imports_from` [EXTRACTED]
- [[logger.ts]] - `imports_from` [EXTRACTED]
- [[mergeGooseYamlConfig()]] - `contains` [EXTRACTED]
- [[readJsonSafe()]] - `imports` [EXTRACTED]
- [[writeMcpConfigAndContext()]] - `contains` [EXTRACTED]
- [[writeMcpJsonConfig()_1]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[McpIntegrations.ts]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None