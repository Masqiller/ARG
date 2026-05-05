---
source_file: "vendor/claude-mem/src/npx-cli/utils/paths.ts"
type: "code"
community: "Community None"
degree: 4
location: "L8"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# claudeConfigDirectory()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 4

## Architecture Graph
```mermaid
graph LR
    center["claudeConfigDirectory[]"]:::centerNode
    center -->|"contains"| N_vendor_claude_mem_src_npx_cli_utils_paths_ts["paths.ts"]
    center -->|"calls"| N_utils_paths_marketplacedirectory["marketplaceDirectory[]"]
    center -->|"calls"| N_utils_paths_pluginsdirectory["pluginsDirectory[]"]
    center -->|"calls"| N_utils_paths_claudesettingspath["claudeSettingsPath[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[claudeSettingsPath()]] - `calls` [EXTRACTED]
- [[marketplaceDirectory()]] - `calls` [EXTRACTED]
- [[paths.ts_1]] - `contains` [EXTRACTED]
- [[pluginsDirectory()]] - `calls` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[claudeConfigDirectory()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None