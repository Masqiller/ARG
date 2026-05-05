---
source_file: "vendor/claude-mem/src/supervisor/process-registry.ts"
type: "code"
community: "Community None"
degree: 7
location: "L30"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# isPidAlive()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 7

## Architecture Graph
```mermaid
graph LR
    center["isPidAlive[]"]:::centerNode
    center -->|"imports"| N_vendor_claude_mem_tests_supervisor_process_registry_test_ts["process-registry.test.ts"]
    center -->|"imports"| N_vendor_claude_mem_src_services_server_server_ts["Server.ts"]
    center -->|"imports"| N_vendor_claude_mem_src_supervisor_shutdown_ts["shutdown.ts"]
    center -->|"calls"| N_supervisor_shutdown_runshutdowncascade["runShutdownCascade[]"]
    center -->|"contains"| N_vendor_claude_mem_src_supervisor_process_registry_ts["process-registry.ts"]
    center -->|"calls"| N_supervisor_process_registry_verifypidfileownership["verifyPidFileOwnership[]"]
    center -->|"calls"| N_supervisor_process_registry_processregistry_prunedeadentries[".pruneDeadEntries[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[.pruneDeadEntries()]] - `calls` [EXTRACTED]
- [[Server.ts]] - `imports` [EXTRACTED]
- [[process-registry.test.ts]] - `imports` [EXTRACTED]
- [[process-registry.ts]] - `contains` [EXTRACTED]
- [[runShutdownCascade()]] - `calls` [INFERRED]
- [[shutdown.ts]] - `imports` [EXTRACTED]
- [[verifyPidFileOwnership()]] - `calls` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[isPidAlive()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None