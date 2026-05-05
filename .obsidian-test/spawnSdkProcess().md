---
source_file: "vendor/claude-mem/src/supervisor/process-registry.ts"
type: "code"
community: "Community None"
degree: 5
location: "L492"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# spawnSdkProcess()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 5

## Architecture Graph
```mermaid
graph LR
    center["spawnSdkProcess[]"]:::centerNode
    center -->|"calls"| N_shared_spawn_spawnhidden["spawnHidden[]"]
    center -->|"calls"| N_supervisor_env_sanitizer_sanitizeenv["sanitizeEnv[]"]
    center -->|"contains"| N_vendor_claude_mem_src_supervisor_process_registry_ts["process-registry.ts"]
    center -->|"calls"| N_supervisor_process_registry_processregistry_register[".register[]"]
    center -->|"calls"| N_supervisor_process_registry_getprocessregistry["getProcessRegistry[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[.register()_1]] - `calls` [EXTRACTED]
- [[getProcessRegistry()]] - `calls` [EXTRACTED]
- [[process-registry.ts]] - `contains` [EXTRACTED]
- [[sanitizeEnv()]] - `calls` [INFERRED]
- [[spawnHidden()]] - `calls` [INFERRED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[spawnSdkProcess()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None