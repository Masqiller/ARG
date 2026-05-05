---
source_file: "vendor/claude-mem/src/utils/json-utils.ts"
type: "code"
community: "Community None"
degree: 14
location: "L5"
tags:
  - graphify/code
  - graphify/INFERRED
  - community/Community_None
---

# readJsonSafe()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 14

## Architecture Graph
```mermaid
graph LR
    center["readJsonSafe[]"]:::centerNode
    center -->|"imports"| N_vendor_claude_mem_tests_json_utils_test_ts["json-utils.test.ts"]
    center -->|"imports"| N_vendor_claude_mem_tests_mcp_integrations_test_ts["mcp-integrations.test.ts"]
    center -->|"calls"| N_tests_mcp_integrations_test_writemcpjsonconfig["writeMcpJsonConfig[]"]
    center -->|"imports"| N_vendor_claude_mem_src_npx_cli_commands_install_ts["install.ts"]
    center -->|"calls"| N_commands_install_registermarketplace["registerMarketplace[]"]
    center -->|"calls"| N_commands_install_registerplugin["registerPlugin[]"]
    center -->|"calls"| N_commands_install_enableplugininclaudesettings["enablePluginInClaudeSettings[]"]
    center -->|"imports"| N_vendor_claude_mem_src_npx_cli_commands_uninstall_ts["uninstall.ts"]
    center -->|"calls"| N_commands_uninstall_removefromknownmarketplaces["removeFromKnownMarketplaces[]"]
    center -->|"calls"| N_commands_uninstall_removefrominstalledplugins["removeFromInstalledPlugins[]"]
    center -->|"calls"| N_commands_uninstall_removefromclaudesettings["removeFromClaudeSettings[]"]
    center -->|"imports"| N_vendor_claude_mem_src_services_integrations_mcpintegrations_ts["McpIntegrations.ts"]
    center -->|"calls"| N_integrations_mcpintegrations_writemcpjsonconfig["writeMcpJsonConfig[]"]
    center -->|"contains"| N_vendor_claude_mem_src_utils_json_utils_ts["json-utils.ts"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[McpIntegrations.ts]] - `imports` [EXTRACTED]
- [[enablePluginInClaudeSettings()]] - `calls` [INFERRED]
- [[install.ts]] - `imports` [EXTRACTED]
- [[json-utils.test.ts]] - `imports` [EXTRACTED]
- [[json-utils.ts]] - `contains` [EXTRACTED]
- [[mcp-integrations.test.ts]] - `imports` [EXTRACTED]
- [[registerMarketplace()]] - `calls` [INFERRED]
- [[registerPlugin()]] - `calls` [INFERRED]
- [[removeFromClaudeSettings()]] - `calls` [INFERRED]
- [[removeFromInstalledPlugins()]] - `calls` [INFERRED]
- [[removeFromKnownMarketplaces()]] - `calls` [INFERRED]
- [[uninstall.ts]] - `imports` [EXTRACTED]
- [[writeMcpJsonConfig()]] - `calls` [INFERRED]
- [[writeMcpJsonConfig()_1]] - `calls` [INFERRED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[readJsonSafe()]]
```

#graphify/code #graphify/INFERRED #community/Community_None