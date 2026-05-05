---
source_file: "vendor/claude-mem/src/npx-cli/commands/install.ts"
type: "code"
community: "Community None"
degree: 4
location: "L495"
tags:
  - graphify/code
  - graphify/INFERRED
  - community/Community_None
---

# copyPluginToMarketplace()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 4

## Architecture Graph
```mermaid
graph LR
    center["copyPluginToMarketplace[]"]:::centerNode
    center -->|"contains"| N_vendor_claude_mem_src_npx_cli_commands_install_ts["install.ts"]
    center -->|"calls"| N_utils_paths_marketplacedirectory["marketplaceDirectory[]"]
    center -->|"calls"| N_utils_paths_npmpackagerootdirectory["npmPackageRootDirectory[]"]
    center -->|"calls"| N_utils_paths_ensuredirectoryexists["ensureDirectoryExists[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[ensureDirectoryExists()]] - `calls` [INFERRED]
- [[install.ts]] - `contains` [EXTRACTED]
- [[marketplaceDirectory()]] - `calls` [INFERRED]
- [[npmPackageRootDirectory()]] - `calls` [INFERRED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[copyPluginToMarketplace()]]
```

#graphify/code #graphify/INFERRED #community/Community_None