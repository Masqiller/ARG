---
source_file: "vendor/claude-mem/src/npx-cli/commands/runtime.ts"
type: "code"
community: "Community None"
degree: 7
location: "L77"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# runAdoptCommand()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 7

## Architecture Graph
```mermaid
graph LR
    center["runAdoptCommand[]"]:::centerNode
    center -->|"calls"| N_shared_spawn_spawnhidden["spawnHidden[]"]
    center -->|"calls"| N_npx_cli_index_main["main[]"]
    center -->|"contains"| N_vendor_claude_mem_src_npx_cli_commands_runtime_ts["runtime.ts"]
    center -->|"calls"| N_commands_runtime_ensureinstalledorexit["ensureInstalledOrExit[]"]
    center -->|"calls"| N_commands_runtime_resolvebunorexit["resolveBunOrExit[]"]
    center -->|"calls"| N_commands_runtime_workerservicescriptpath["workerServiceScriptPath[]"]
    center -->|"calls"| N_utils_paths_marketplacedirectory["marketplaceDirectory[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[ensureInstalledOrExit()]] - `calls` [EXTRACTED]
- [[main()_21]] - `calls` [INFERRED]
- [[marketplaceDirectory()]] - `calls` [INFERRED]
- [[resolveBunOrExit()]] - `calls` [EXTRACTED]
- [[runtime.ts]] - `contains` [EXTRACTED]
- [[spawnHidden()]] - `calls` [INFERRED]
- [[workerServiceScriptPath()]] - `calls` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[runAdoptCommand()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None