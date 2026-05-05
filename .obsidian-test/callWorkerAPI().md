---
source_file: "vendor/claude-mem/src/servers/mcp-server.ts"
type: "code"
community: "Community None"
degree: 2
location: "L55"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# callWorkerAPI()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 2

## Architecture Graph
```mermaid
graph LR
    center["callWorkerAPI[]"]:::centerNode
    center -->|"contains"| N_vendor_claude_mem_src_servers_mcp_server_ts["mcp-server.ts"]
    center -->|"calls"| N_shared_worker_utils_workerhttprequest["workerHttpRequest[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[mcp-server.ts]] - `contains` [EXTRACTED]
- [[workerHttpRequest()]] - `calls` [INFERRED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[callWorkerAPI()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None