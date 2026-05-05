---
source_file: "vendor/claude-mem/src/servers/mcp-server.ts"
type: "code"
community: "Community None"
degree: 3
location: "L143"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# verifyWorkerConnection()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 3

## Architecture Graph
```mermaid
graph LR
    center["verifyWorkerConnection[]"]:::centerNode
    center -->|"contains"| N_vendor_claude_mem_src_servers_mcp_server_ts["mcp-server.ts"]
    center -->|"calls"| N_servers_mcp_server_ensureworkerconnection["ensureWorkerConnection[]"]
    center -->|"calls"| N_shared_worker_utils_workerhttprequest["workerHttpRequest[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[ensureWorkerConnection()]] - `calls` [EXTRACTED]
- [[mcp-server.ts]] - `contains` [EXTRACTED]
- [[workerHttpRequest()]] - `calls` [INFERRED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[verifyWorkerConnection()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None