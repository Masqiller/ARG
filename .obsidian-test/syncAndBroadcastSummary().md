---
source_file: "vendor/claude-mem/src/services/worker/agents/ResponseProcessor.ts"
type: "code"
community: "Community None"
degree: 5
location: "L255"
tags:
  - graphify/code
  - graphify/INFERRED
  - community/Community_None
---

# syncAndBroadcastSummary()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 5

## Architecture Graph
```mermaid
graph LR
    center["syncAndBroadcastSummary[]"]:::centerNode
    center -->|"calls"| N_shared_worker_utils_getworkerport["getWorkerPort[]"]
    center -->|"contains"| N_vendor_claude_mem_src_services_worker_agents_responseprocessor_ts["ResponseProcessor.ts"]
    center -->|"calls"| N_agents_responseprocessor_processagentresponse["processAgentResponse[]"]
    center -->|"calls"| N_agents_observationbroadcaster_broadcastsummary["broadcastSummary[]"]
    center -->|"calls"| N_integrations_cursorhooksinstaller_updatecursorcontextforproject["updateCursorContextForProject[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[ResponseProcessor.ts]] - `contains` [EXTRACTED]
- [[broadcastSummary()]] - `calls` [INFERRED]
- [[getWorkerPort()]] - `calls` [INFERRED]
- [[processAgentResponse()]] - `calls` [EXTRACTED]
- [[updateCursorContextForProject()]] - `calls` [INFERRED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[syncAndBroadcastSummary()]]
```

#graphify/code #graphify/INFERRED #community/Community_None