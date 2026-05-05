---
source_file: "vendor/claude-mem/scripts/check-pending-queue.ts"
type: "code"
community: "Community None"
degree: 4
location: "L35"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# fetchWithTimeout()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 4

## Architecture Graph
```mermaid
graph LR
    center["fetchWithTimeout[]"]:::centerNode
    center -->|"contains"| N_vendor_claude_mem_scripts_check_pending_queue_ts["check-pending-queue.ts"]
    center -->|"calls"| N_scripts_check_pending_queue_checkworkerhealth["checkWorkerHealth[]"]
    center -->|"calls"| N_scripts_check_pending_queue_getprocessingstatus["getProcessingStatus[]"]
    center -->|"calls"| N_scripts_check_pending_queue_triggerprocessing["triggerProcessing[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[check-pending-queue.ts]] - `contains` [EXTRACTED]
- [[checkWorkerHealth()]] - `calls` [EXTRACTED]
- [[getProcessingStatus()]] - `calls` [EXTRACTED]
- [[triggerProcessing()]] - `calls` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[fetchWithTimeout()_1]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None