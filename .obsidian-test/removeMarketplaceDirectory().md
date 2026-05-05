---
source_file: "vendor/claude-mem/src/npx-cli/commands/uninstall.ts"
type: "code"
community: "Community None"
degree: 2
location: "L19"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# removeMarketplaceDirectory()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 2

## Architecture Graph
```mermaid
graph LR
    center["removeMarketplaceDirectory[]"]:::centerNode
    center -->|"contains"| N_vendor_claude_mem_src_npx_cli_commands_uninstall_ts["uninstall.ts"]
    center -->|"calls"| N_utils_paths_marketplacedirectory["marketplaceDirectory[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[marketplaceDirectory()]] - `calls` [INFERRED]
- [[uninstall.ts]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[removeMarketplaceDirectory()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None