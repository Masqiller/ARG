---
source_file: "vendor/claude-mem/src/cli/claude-md-commands.ts"
type: "code"
community: "Community None"
degree: 4
location: "L373"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# generateClaudeMd()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 4

## Architecture Graph
```mermaid
graph LR
    center["generateClaudeMd[]"]:::centerNode
    center -->|"contains"| N_vendor_claude_mem_src_cli_claude_md_commands_ts["claude-md-commands.ts"]
    center -->|"calls"| N_cli_claude_md_commands_gettrackedfolders["getTrackedFolders[]"]
    center -->|"calls"| N_cli_claude_md_commands_processallfoldersforgeneration["processAllFoldersForGeneration[]"]
    center -->|"calls"| N_services_worker_service_main["main[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[claude-md-commands.ts]] - `contains` [EXTRACTED]
- [[getTrackedFolders()]] - `calls` [EXTRACTED]
- [[main()_22]] - `calls` [INFERRED]
- [[processAllFoldersForGeneration()]] - `calls` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[generateClaudeMd()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None