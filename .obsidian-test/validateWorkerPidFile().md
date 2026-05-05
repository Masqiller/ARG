---
source_file: "vendor/claude-mem/src/supervisor/index.ts"
type: "code"
community: "Community None"
degree: 8
location: "L155"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# validateWorkerPidFile()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 8

## Architecture Graph
```mermaid
graph LR
    center["validateWorkerPidFile[]"]:::centerNode
    center -->|"imports"| N_vendor_claude_mem_tests_supervisor_index_test_ts["index.test.ts"]
    center -->|"imports"| N_vendor_claude_mem_src_shared_worker_utils_ts["worker-utils.ts"]
    center -->|"calls"| N_shared_worker_utils_isworkerportalive["isWorkerPortAlive[]"]
    center -->|"imports"| N_vendor_claude_mem_src_services_infrastructure_processmanager_ts["ProcessManager.ts"]
    center -->|"calls"| N_infrastructure_processmanager_cleanstalepidfile["cleanStalePidFile[]"]
    center -->|"contains"| N_vendor_claude_mem_src_supervisor_index_ts["index.ts"]
    center -->|"calls"| N_supervisor_index_supervisor_start[".start[]"]
    center -->|"calls"| N_supervisor_process_registry_verifypidfileownership["verifyPidFileOwnership[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[.start()_3]] - `calls` [EXTRACTED]
- [[ProcessManager.ts]] - `imports` [EXTRACTED]
- [[cleanStalePidFile()]] - `calls` [INFERRED]
- [[index.test.ts]] - `imports` [EXTRACTED]
- [[index.ts_11]] - `contains` [EXTRACTED]
- [[isWorkerPortAlive()]] - `calls` [INFERRED]
- [[verifyPidFileOwnership()]] - `calls` [INFERRED]
- [[worker-utils.ts]] - `imports` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[validateWorkerPidFile()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None