---
source_file: "vendor/claude-mem/src/supervisor/shutdown.ts"
type: "code"
community: "Community None"
degree: 7
location: "L20"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# runShutdownCascade()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 7

## Architecture Graph
```mermaid
graph LR
    center["runShutdownCascade[]"]:::centerNode
    center -->|"imports"| N_vendor_claude_mem_tests_supervisor_shutdown_test_ts["shutdown.test.ts"]
    center -->|"contains"| N_vendor_claude_mem_src_supervisor_shutdown_ts["shutdown.ts"]
    center -->|"calls"| N_supervisor_shutdown_signalprocess["signalProcess[]"]
    center -->|"calls"| N_supervisor_shutdown_waitforexit["waitForExit[]"]
    center -->|"imports"| N_vendor_claude_mem_src_supervisor_index_ts["index.ts"]
    center -->|"calls"| N_supervisor_process_registry_ispidalive["isPidAlive[]"]
    center -->|"calls"| N_supervisor_index_supervisor_stop[".stop[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[.stop()_2]] - `calls` [INFERRED]
- [[index.ts_11]] - `imports` [EXTRACTED]
- [[isPidAlive()]] - `calls` [INFERRED]
- [[shutdown.test.ts]] - `imports` [EXTRACTED]
- [[shutdown.ts]] - `contains` [EXTRACTED]
- [[signalProcess()]] - `calls` [EXTRACTED]
- [[waitForExit()]] - `calls` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[runShutdownCascade()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None