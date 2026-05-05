---
source_file: "vendor/claude-mem/src/npx-cli/utils/paths.ts"
type: "code"
community: "Community None"
degree: 6
location: "L20"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# knownMarketplacesPath()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 6

## Architecture Graph
```mermaid
graph LR
    center["knownMarketplacesPath[]"]:::centerNode
    center -->|"imports"| N_vendor_claude_mem_src_npx_cli_commands_install_ts["install.ts"]
    center -->|"calls"| N_commands_install_registermarketplace["registerMarketplace[]"]
    center -->|"imports"| N_vendor_claude_mem_src_npx_cli_commands_uninstall_ts["uninstall.ts"]
    center -->|"calls"| N_commands_uninstall_removefromknownmarketplaces["removeFromKnownMarketplaces[]"]
    center -->|"contains"| N_vendor_claude_mem_src_npx_cli_utils_paths_ts["paths.ts"]
    center -->|"calls"| N_utils_paths_pluginsdirectory["pluginsDirectory[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[install.ts]] - `imports` [EXTRACTED]
- [[paths.ts_1]] - `contains` [EXTRACTED]
- [[pluginsDirectory()]] - `calls` [EXTRACTED]
- [[registerMarketplace()]] - `calls` [INFERRED]
- [[removeFromKnownMarketplaces()]] - `calls` [INFERRED]
- [[uninstall.ts]] - `imports` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[knownMarketplacesPath()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None