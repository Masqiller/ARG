---
source_file: "vendor/claude-mem/scripts/check-pending-queue.ts"
type: "code"
community: "Community None"
degree: 7
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# check-pending-queue.ts

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 7

## Architecture Graph
```mermaid
graph LR
    center["check-pending-queue.ts"]:::centerNode
    center -->|"contains"| N_scripts_check_pending_queue_resolveworkerport["resolveWorkerPort[]"]
    center -->|"contains"| N_scripts_check_pending_queue_fetchwithtimeout["fetchWithTimeout[]"]
    center -->|"contains"| N_scripts_check_pending_queue_checkworkerhealth["checkWorkerHealth[]"]
    center -->|"contains"| N_scripts_check_pending_queue_getprocessingstatus["getProcessingStatus[]"]
    center -->|"contains"| N_scripts_check_pending_queue_triggerprocessing["triggerProcessing[]"]
    center -->|"contains"| N_scripts_check_pending_queue_prompt["prompt[]"]
    center -->|"contains"| N_scripts_check_pending_queue_main["main[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[checkWorkerHealth()]] - `contains` [EXTRACTED]
- [[fetchWithTimeout()_1]] - `contains` [EXTRACTED]
- [[getProcessingStatus()]] - `contains` [EXTRACTED]
- [[main()_35]] - `contains` [EXTRACTED]
- [[prompt()_1]] - `contains` [EXTRACTED]
- [[resolveWorkerPort()_1]] - `contains` [EXTRACTED]
- [[triggerProcessing()]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[check-pending-queue.ts]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None