---
source_file: "vendor/claude-mem/src/npx-cli/utils/paths.ts"
type: "code"
community: "Community None"
degree: 5
location: "L48"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# npmPackagePluginDirectory()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 5

## Architecture Graph
```mermaid
graph LR
    center["npmPackagePluginDirectory[]"]:::centerNode
    center -->|"imports"| N_vendor_claude_mem_src_npx_cli_commands_install_ts["install.ts"]
    center -->|"calls"| N_commands_install_copyplugintocache["copyPluginToCache[]"]
    center -->|"contains"| N_vendor_claude_mem_src_npx_cli_utils_paths_ts["paths.ts"]
    center -->|"calls"| N_utils_paths_npmpackagerootdirectory["npmPackageRootDirectory[]"]
    center -->|"calls"| N_utils_paths_readpluginversion["readPluginVersion[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[copyPluginToCache()]] - `calls` [INFERRED]
- [[install.ts]] - `imports` [EXTRACTED]
- [[npmPackageRootDirectory()]] - `calls` [EXTRACTED]
- [[paths.ts_1]] - `contains` [EXTRACTED]
- [[readPluginVersion()]] - `calls` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[npmPackagePluginDirectory()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None