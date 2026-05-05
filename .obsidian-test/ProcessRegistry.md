---
source_file: "vendor/claude-mem/src/supervisor/process-registry.ts"
type: "code"
community: "Community None"
degree: 15
location: "L118"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# ProcessRegistry

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 15

## Architecture Graph
```mermaid
graph LR
    center["ProcessRegistry"]:::centerNode
    center -->|"imports"| N_vendor_claude_mem_src_supervisor_shutdown_ts["shutdown.ts"]
    center -->|"imports"| N_vendor_claude_mem_src_supervisor_index_ts["index.ts"]
    center -->|"contains"| N_vendor_claude_mem_src_supervisor_process_registry_ts["process-registry.ts"]
    center -->|"method"| N_supervisor_process_registry_processregistry_constructor[".constructor[]"]
    center -->|"method"| N_supervisor_process_registry_processregistry_initialize[".initialize[]"]
    center -->|"method"| N_supervisor_process_registry_processregistry_register[".register[]"]
    center -->|"method"| N_supervisor_process_registry_processregistry_unregister[".unregister[]"]
    center -->|"method"| N_supervisor_process_registry_processregistry_clear[".clear[]"]
    center -->|"method"| N_supervisor_process_registry_processregistry_getall[".getAll[]"]
    center -->|"method"| N_supervisor_process_registry_processregistry_getbysession[".getBySession[]"]
    center -->|"method"| N_supervisor_process_registry_processregistry_getruntimeprocess[".getRuntimeProcess[]"]
    center -->|"method"| N_supervisor_process_registry_processregistry_getbypid[".getByPid[]"]
    center -->|"method"| N_supervisor_process_registry_processregistry_prunedeadentries[".pruneDeadEntries[]"]
    center -->|"method"| N_supervisor_process_registry_processregistry_reapsession[".reapSession[]"]
    center -->|"method"| N_supervisor_process_registry_processregistry_persist[".persist[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[.clear()_3]] - `method` [EXTRACTED]
- [[.constructor()_46]] - `method` [EXTRACTED]
- [[.getAll()_1]] - `method` [EXTRACTED]
- [[.getByPid()]] - `method` [EXTRACTED]
- [[.getBySession()]] - `method` [EXTRACTED]
- [[.getRuntimeProcess()]] - `method` [EXTRACTED]
- [[.initialize()_3]] - `method` [EXTRACTED]
- [[.persist()]] - `method` [EXTRACTED]
- [[.pruneDeadEntries()]] - `method` [EXTRACTED]
- [[.reapSession()]] - `method` [EXTRACTED]
- [[.register()_1]] - `method` [EXTRACTED]
- [[.unregister()]] - `method` [EXTRACTED]
- [[index.ts_11]] - `imports` [EXTRACTED]
- [[process-registry.ts]] - `contains` [EXTRACTED]
- [[shutdown.ts]] - `imports` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[ProcessRegistry]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None