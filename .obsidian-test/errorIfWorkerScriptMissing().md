---
source_file: "vendor/claude-mem/src/servers/mcp-server.ts"
type: "code"
community: "Community None"
degree: 2
location: "L39"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# errorIfWorkerScriptMissing()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 2

## Architecture Graph
```mermaid
graph LR
    center["errorIfWorkerScriptMissing[]"]:::centerNode
    center -->|"contains"| N_vendor_claude_mem_src_servers_mcp_server_ts["mcp-server.ts"]
    center -->|"calls"| N_servers_mcp_server_ensureworkerconnection["ensureWorkerConnection[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[ensureWorkerConnection()]] - `calls` [EXTRACTED]
- [[mcp-server.ts]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[errorIfWorkerScriptMissing()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None