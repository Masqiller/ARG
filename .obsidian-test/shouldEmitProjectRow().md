---
source_file: "vendor/claude-mem/src/shared/should-track-project.ts"
type: "code"
community: "Community None"
degree: 4
location: "L23"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# shouldEmitProjectRow()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 4

## Architecture Graph
```mermaid
graph LR
    center["shouldEmitProjectRow[]"]:::centerNode
    center -->|"contains"| N_vendor_claude_mem_src_shared_should_track_project_ts["should-track-project.ts"]
    center -->|"imports"| N_vendor_claude_mem_src_services_worker_agents_observationbroadcaster_ts["ObservationBroadcaster.ts"]
    center -->|"calls"| N_agents_observationbroadcaster_broadcastobservation["broadcastObservation[]"]
    center -->|"calls"| N_agents_observationbroadcaster_broadcastsummary["broadcastSummary[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[ObservationBroadcaster.ts]] - `imports` [EXTRACTED]
- [[broadcastObservation()]] - `calls` [INFERRED]
- [[broadcastSummary()]] - `calls` [INFERRED]
- [[should-track-project.ts]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[shouldEmitProjectRow()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None