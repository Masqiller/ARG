---
source_file: "vendor/claude-mem/src/services/worker/agents/ObservationBroadcaster.ts"
type: "code"
community: "Community None"
degree: 8
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# ObservationBroadcaster.ts

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 8

## Architecture Graph
```mermaid
graph LR
    center["ObservationBroadcaster.ts"]:::centerNode
    center -->|"imports_from"| N_vendor_claude_mem_src_shared_should_track_project_ts["should-track-project.ts"]
    center -->|"imports"| N_shared_should_track_project_shouldemitprojectrow["shouldEmitProjectRow[]"]
    center -->|"imports_from"| N_vendor_claude_mem_src_services_worker_agents_responseprocessor_ts["ResponseProcessor.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_services_worker_agents_types_ts["types.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_utils_logger_ts["logger.ts"]
    center -->|"imports"| N_utils_logger_logger["Logger"]
    center -->|"contains"| N_agents_observationbroadcaster_broadcastobservation["broadcastObservation[]"]
    center -->|"contains"| N_agents_observationbroadcaster_broadcastsummary["broadcastSummary[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[Logger]] - `imports` [EXTRACTED]
- [[ResponseProcessor.ts]] - `imports_from` [EXTRACTED]
- [[broadcastObservation()]] - `contains` [EXTRACTED]
- [[broadcastSummary()]] - `contains` [EXTRACTED]
- [[logger.ts]] - `imports_from` [EXTRACTED]
- [[should-track-project.ts]] - `imports_from` [EXTRACTED]
- [[shouldEmitProjectRow()]] - `imports` [EXTRACTED]
- [[types.ts_1]] - `imports_from` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[ObservationBroadcaster.ts]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None