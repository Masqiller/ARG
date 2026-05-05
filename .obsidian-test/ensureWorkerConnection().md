---
source_file: "vendor/claude-mem/src/servers/mcp-server.ts"
type: "code"
community: "Community None"
degree: 4
location: "L153"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# ensureWorkerConnection()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 4

## Architecture Graph
```mermaid
graph LR
    center["ensureWorkerConnection[]"]:::centerNode
    center -->|"contains"| N_vendor_claude_mem_src_servers_mcp_server_ts["mcp-server.ts"]
    center -->|"calls"| N_servers_mcp_server_errorifworkerscriptmissing["errorIfWorkerScriptMissing[]"]
    center -->|"calls"| N_servers_mcp_server_verifyworkerconnection["verifyWorkerConnection[]"]
    center -->|"calls"| N_shared_worker_utils_getworkerport["getWorkerPort[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[errorIfWorkerScriptMissing()]] - `calls` [EXTRACTED]
- [[getWorkerPort()]] - `calls` [INFERRED]
- [[mcp-server.ts]] - `contains` [EXTRACTED]
- [[verifyWorkerConnection()]] - `calls` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[ensureWorkerConnection()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None