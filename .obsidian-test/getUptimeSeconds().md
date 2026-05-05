---
source_file: "vendor/claude-mem/src/shared/uptime.ts"
type: "code"
community: "Community None"
degree: 4
location: "L5"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# getUptimeSeconds()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 4

## Architecture Graph
```mermaid
graph LR
    center["getUptimeSeconds[]"]:::centerNode
    center -->|"contains"| N_vendor_claude_mem_src_shared_uptime_ts["uptime.ts"]
    center -->|"imports"| N_vendor_claude_mem_src_services_worker_http_routes_sessionroutes_ts["SessionRoutes.ts"]
    center -->|"imports"| N_vendor_claude_mem_src_services_worker_http_routes_dataroutes_ts["DataRoutes.ts"]
    center -->|"imports"| N_vendor_claude_mem_src_services_server_server_ts["Server.ts"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[DataRoutes.ts]] - `imports` [EXTRACTED]
- [[Server.ts]] - `imports` [EXTRACTED]
- [[SessionRoutes.ts]] - `imports` [EXTRACTED]
- [[uptime.ts]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[getUptimeSeconds()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None