---
source_file: "vendor/claude-mem/src/services/worker/agents/ObservationBroadcaster.ts"
type: "code"
community: "Community None"
degree: 4
location: "L28"
tags:
  - graphify/code
  - graphify/INFERRED
  - community/Community_None
---

# broadcastSummary()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 4

## Architecture Graph
```mermaid
graph LR
    center["broadcastSummary[]"]:::centerNode
    center -->|"calls"| N_shared_should_track_project_shouldemitprojectrow["shouldEmitProjectRow[]"]
    center -->|"imports"| N_vendor_claude_mem_src_services_worker_agents_responseprocessor_ts["ResponseProcessor.ts"]
    center -->|"calls"| N_agents_responseprocessor_syncandbroadcastsummary["syncAndBroadcastSummary[]"]
    center -->|"contains"| N_vendor_claude_mem_src_services_worker_agents_observationbroadcaster_ts["ObservationBroadcaster.ts"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[ObservationBroadcaster.ts]] - `contains` [EXTRACTED]
- [[ResponseProcessor.ts]] - `imports` [EXTRACTED]
- [[shouldEmitProjectRow()]] - `calls` [INFERRED]
- [[syncAndBroadcastSummary()]] - `calls` [INFERRED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[broadcastSummary()]]
```

#graphify/code #graphify/INFERRED #community/Community_None