---
source_file: "vendor/claude-mem/src/supervisor/process-registry.ts"
type: "code"
community: "Community None"
degree: 7
location: "L345"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# getProcessRegistry()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 7

## Architecture Graph
```mermaid
graph LR
    center["getProcessRegistry[]"]:::centerNode
    center -->|"imports"| N_vendor_claude_mem_src_supervisor_index_ts["index.ts"]
    center -->|"imports"| N_vendor_claude_mem_src_supervisor_health_checker_ts["health-checker.ts"]
    center -->|"calls"| N_supervisor_health_checker_runhealthcheck["runHealthCheck[]"]
    center -->|"contains"| N_vendor_claude_mem_src_supervisor_process_registry_ts["process-registry.ts"]
    center -->|"calls"| N_supervisor_process_registry_getsdkprocessforsession["getSdkProcessForSession[]"]
    center -->|"calls"| N_supervisor_process_registry_getactivesdkcount["getActiveSdkCount[]"]
    center -->|"calls"| N_supervisor_process_registry_spawnsdkprocess["spawnSdkProcess[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[getActiveSdkCount()]] - `calls` [EXTRACTED]
- [[getSdkProcessForSession()]] - `calls` [EXTRACTED]
- [[health-checker.ts]] - `imports` [EXTRACTED]
- [[index.ts_11]] - `imports` [EXTRACTED]
- [[process-registry.ts]] - `contains` [EXTRACTED]
- [[runHealthCheck()]] - `calls` [INFERRED]
- [[spawnSdkProcess()]] - `calls` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[getProcessRegistry()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None