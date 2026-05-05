---
source_file: "vendor/claude-mem/src/npx-cli/utils/paths.ts"
type: "code"
community: "Community None"
degree: 6
location: "L76"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# isPluginInstalled()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 6

## Architecture Graph
```mermaid
graph LR
    center["isPluginInstalled[]"]:::centerNode
    center -->|"imports"| N_vendor_claude_mem_src_npx_cli_commands_runtime_ts["runtime.ts"]
    center -->|"calls"| N_commands_runtime_ensureinstalledorexit["ensureInstalledOrExit[]"]
    center -->|"imports"| N_vendor_claude_mem_src_npx_cli_commands_uninstall_ts["uninstall.ts"]
    center -->|"calls"| N_commands_uninstall_rununinstallcommand["runUninstallCommand[]"]
    center -->|"contains"| N_vendor_claude_mem_src_npx_cli_utils_paths_ts["paths.ts"]
    center -->|"calls"| N_utils_paths_marketplacedirectory["marketplaceDirectory[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[ensureInstalledOrExit()]] - `calls` [INFERRED]
- [[marketplaceDirectory()]] - `calls` [EXTRACTED]
- [[paths.ts_1]] - `contains` [EXTRACTED]
- [[runUninstallCommand()]] - `calls` [INFERRED]
- [[runtime.ts]] - `imports` [EXTRACTED]
- [[uninstall.ts]] - `imports` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[isPluginInstalled()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None