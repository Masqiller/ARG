---
source_file: "vendor/claude-mem/src/utils/json-utils.ts"
type: "code"
community: "Community None"
degree: 6
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# json-utils.ts

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 6

## Architecture Graph
```mermaid
graph LR
    center["json-utils.ts"]:::centerNode
    center -->|"imports_from"| N_vendor_claude_mem_src_npx_cli_commands_install_ts["install.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_npx_cli_commands_uninstall_ts["uninstall.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_services_integrations_mcpintegrations_ts["McpIntegrations.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_utils_logger_ts["logger.ts"]
    center -->|"imports"| N_utils_logger_logger["Logger"]
    center -->|"contains"| N_utils_json_utils_readjsonsafe["readJsonSafe[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[Logger]] - `imports` [EXTRACTED]
- [[McpIntegrations.ts]] - `imports_from` [EXTRACTED]
- [[install.ts]] - `imports_from` [EXTRACTED]
- [[logger.ts]] - `imports_from` [EXTRACTED]
- [[readJsonSafe()]] - `contains` [EXTRACTED]
- [[uninstall.ts]] - `imports_from` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[json-utils.ts]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None