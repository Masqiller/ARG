---
source_file: "vendor/claude-mem/src/supervisor/shutdown.ts"
type: "code"
community: "Community None"
degree: 13
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# shutdown.ts

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 13

## Architecture Graph
```mermaid
graph LR
    center["shutdown.ts"]:::centerNode
    center -->|"imports_from"| N_vendor_claude_mem_tests_supervisor_shutdown_test_ts["shutdown.test.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_shared_hook_constants_ts["hook-constants.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_shared_paths_ts["paths.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_utils_logger_ts["logger.ts"]
    center -->|"imports"| N_utils_logger_logger["Logger"]
    center -->|"imports_from"| N_vendor_claude_mem_src_supervisor_process_registry_ts["process-registry.ts"]
    center -->|"imports"| N_supervisor_process_registry_ispidalive["isPidAlive[]"]
    center -->|"imports"| N_supervisor_process_registry_processregistry["ProcessRegistry"]
    center -->|"contains"| N_supervisor_shutdown_runshutdowncascade["runShutdownCascade[]"]
    center -->|"contains"| N_supervisor_shutdown_waitforexit["waitForExit[]"]
    center -->|"contains"| N_supervisor_shutdown_signalprocess["signalProcess[]"]
    center -->|"contains"| N_supervisor_shutdown_loadtreekill["loadTreeKill[]"]
    center -->|"imports_from"| N_vendor_claude_mem_src_supervisor_index_ts["index.ts"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[Logger]] - `imports` [EXTRACTED]
- [[ProcessRegistry]] - `imports` [EXTRACTED]
- [[hook-constants.ts]] - `imports_from` [EXTRACTED]
- [[index.ts_11]] - `imports_from` [EXTRACTED]
- [[isPidAlive()]] - `imports` [EXTRACTED]
- [[loadTreeKill()]] - `contains` [EXTRACTED]
- [[logger.ts]] - `imports_from` [EXTRACTED]
- [[paths.ts]] - `imports_from` [EXTRACTED]
- [[process-registry.ts]] - `imports_from` [EXTRACTED]
- [[runShutdownCascade()]] - `contains` [EXTRACTED]
- [[shutdown.test.ts]] - `imports_from` [EXTRACTED]
- [[signalProcess()]] - `contains` [EXTRACTED]
- [[waitForExit()]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[shutdown.ts]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None