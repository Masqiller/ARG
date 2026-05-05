---
source_file: "vendor/claude-mem/tests/services/sync/chroma-mcp-manager-ssl.test.ts"
type: "code"
community: "Community None"
degree: 7
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# chroma-mcp-manager-ssl.test.ts

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 7

## Architecture Graph
```mermaid
graph LR
    center["chroma-mcp-manager-ssl.test.ts"]:::centerNode
    center -->|"contains"| N_sync_chroma_mcp_manager_ssl_test_constructor["constructor[]"]
    center -->|"contains"| N_sync_chroma_mcp_manager_ssl_test_close["close[]"]
    center -->|"contains"| N_sync_chroma_mcp_manager_ssl_test_connect["connect[]"]
    center -->|"contains"| N_sync_chroma_mcp_manager_ssl_test_calltool["callTool[]"]
    center -->|"imports_from"| N_vendor_claude_mem_src_services_sync_chromamcpmanager_ts["ChromaMcpManager.ts"]
    center -->|"imports"| N_sync_chromamcpmanager_chromamcpmanager["ChromaMcpManager"]
    center -->|"contains"| N_sync_chroma_mcp_manager_ssl_test_assertsslflag["assertSslFlag[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[ChromaMcpManager]] - `imports` [EXTRACTED]
- [[ChromaMcpManager.ts]] - `imports_from` [EXTRACTED]
- [[assertSslFlag()]] - `contains` [EXTRACTED]
- [[callTool()]] - `contains` [EXTRACTED]
- [[close()]] - `contains` [EXTRACTED]
- [[connect()_1]] - `contains` [EXTRACTED]
- [[constructor()]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[chroma-mcp-manager-ssl.test.ts]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None