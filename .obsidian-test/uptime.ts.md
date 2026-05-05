---
source_file: "vendor/claude-mem/src/shared/uptime.ts"
type: "code"
community: "Community None"
degree: 4
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# uptime.ts

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 4

## Architecture Graph
```mermaid
graph LR
    center["uptime.ts"]:::centerNode
    center -->|"contains"| N_shared_uptime_getuptimeseconds["getUptimeSeconds[]"]
    center -->|"imports_from"| N_vendor_claude_mem_src_services_worker_http_routes_sessionroutes_ts["SessionRoutes.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_services_worker_http_routes_dataroutes_ts["DataRoutes.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_services_server_server_ts["Server.ts"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[DataRoutes.ts]] - `imports_from` [EXTRACTED]
- [[Server.ts]] - `imports_from` [EXTRACTED]
- [[SessionRoutes.ts]] - `imports_from` [EXTRACTED]
- [[getUptimeSeconds()]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[uptime.ts]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None