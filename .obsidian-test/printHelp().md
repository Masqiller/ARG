---
source_file: "vendor/claude-mem/src/npx-cli/index.ts"
type: "code"
community: "Community None"
degree: 3
location: "L16"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# printHelp()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 3

## Architecture Graph
```mermaid
graph LR
    center["printHelp[]"]:::centerNode
    center -->|"contains"| N_vendor_claude_mem_src_npx_cli_index_ts["index.ts"]
    center -->|"calls"| N_npx_cli_index_main["main[]"]
    center -->|"calls"| N_utils_paths_readpluginversion["readPluginVersion[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[index.ts_3]] - `contains` [EXTRACTED]
- [[main()_21]] - `calls` [EXTRACTED]
- [[readPluginVersion()]] - `calls` [INFERRED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[printHelp()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None