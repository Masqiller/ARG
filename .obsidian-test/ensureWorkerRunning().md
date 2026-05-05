---
source_file: "vendor/claude-mem/src/shared/worker-utils.ts"
type: "code"
community: "Community None"
degree: 11
location: "L224"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# ensureWorkerRunning()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 11

## Architecture Graph
```mermaid
graph LR
    center["ensureWorkerRunning[]"]:::centerNode
    center -->|"contains"| N_vendor_claude_mem_src_shared_worker_utils_ts["worker-utils.ts"]
    center -->|"calls"| N_shared_worker_utils_checkworkerversion["checkWorkerVersion[]"]
    center -->|"calls"| N_shared_worker_utils_resolveworkerscriptpath["resolveWorkerScriptPath[]"]
    center -->|"calls"| N_shared_worker_utils_resolvebunruntime["resolveBunRuntime[]"]
    center -->|"calls"| N_shared_worker_utils_waitforworkerport["waitForWorkerPort[]"]
    center -->|"calls"| N_shared_worker_utils_isworkerportalive["isWorkerPortAlive[]"]
    center -->|"calls"| N_shared_worker_utils_ensureworkeraliveonce["ensureWorkerAliveOnce[]"]
    center -->|"imports"| N_vendor_claude_mem_src_services_transcripts_processor_ts["processor.ts"]
    center -->|"calls"| N_shared_spawn_spawnhidden["spawnHidden[]"]
    center -->|"calls"| N_transcripts_processor_transcripteventprocessor_queuesummary[".queueSummary[]"]
    center -->|"calls"| N_transcripts_processor_transcripteventprocessor_updatecontext[".updateContext[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[.queueSummary()]] - `calls` [INFERRED]
- [[.updateContext()]] - `calls` [INFERRED]
- [[checkWorkerVersion()]] - `calls` [EXTRACTED]
- [[ensureWorkerAliveOnce()]] - `calls` [EXTRACTED]
- [[isWorkerPortAlive()]] - `calls` [EXTRACTED]
- [[processor.ts]] - `imports` [EXTRACTED]
- [[resolveBunRuntime()]] - `calls` [EXTRACTED]
- [[resolveWorkerScriptPath()]] - `calls` [EXTRACTED]
- [[spawnHidden()]] - `calls` [INFERRED]
- [[waitForWorkerPort()]] - `calls` [EXTRACTED]
- [[worker-utils.ts]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[ensureWorkerRunning()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None