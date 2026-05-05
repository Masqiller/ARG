---
source_file: "vendor/claude-mem/src/supervisor/process-registry.ts"
type: "code"
community: "Community None"
degree: 4
location: "L433"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# getActiveSdkCount()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 4

## Architecture Graph
```mermaid
graph LR
    center["getActiveSdkCount[]"]:::centerNode
    center -->|"contains"| N_vendor_claude_mem_src_supervisor_process_registry_ts["process-registry.ts"]
    center -->|"calls"| N_supervisor_process_registry_processregistry_getall[".getAll[]"]
    center -->|"calls"| N_supervisor_process_registry_getprocessregistry["getProcessRegistry[]"]
    center -->|"calls"| N_supervisor_process_registry_waitforslot["waitForSlot[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[.getAll()_1]] - `calls` [EXTRACTED]
- [[getProcessRegistry()]] - `calls` [EXTRACTED]
- [[process-registry.ts]] - `contains` [EXTRACTED]
- [[waitForSlot()]] - `calls` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[getActiveSdkCount()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None