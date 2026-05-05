---
source_file: "vendor/claude-mem/src/services/sync/ChromaMcpManager.ts"
type: "code"
community: "Community None"
degree: 20
location: "L26"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# ChromaMcpManager

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 20

## Architecture Graph
```mermaid
graph LR
    center["ChromaMcpManager"]:::centerNode
    center -->|"imports"| N_vendor_claude_mem_tests_services_sync_chroma_mcp_manager_ssl_test_ts["chroma-mcp-manager-ssl.test.ts"]
    center -->|"imports"| N_vendor_claude_mem_src_services_worker_service_ts["worker-service.ts"]
    center -->|"imports"| N_vendor_claude_mem_src_services_worker_http_routes_chromaroutes_ts["ChromaRoutes.ts"]
    center -->|"contains"| N_vendor_claude_mem_src_services_sync_chromamcpmanager_ts["ChromaMcpManager.ts"]
    center -->|"method"| N_sync_chromamcpmanager_chromamcpmanager_constructor[".constructor[]"]
    center -->|"method"| N_sync_chromamcpmanager_chromamcpmanager_getinstance[".getInstance[]"]
    center -->|"method"| N_sync_chromamcpmanager_chromamcpmanager_ensureconnected[".ensureConnected[]"]
    center -->|"method"| N_sync_chromamcpmanager_chromamcpmanager_connectinternal[".connectInternal[]"]
    center -->|"method"| N_sync_chromamcpmanager_chromamcpmanager_buildcommandargs[".buildCommandArgs[]"]
    center -->|"method"| N_sync_chromamcpmanager_chromamcpmanager_calltool[".callTool[]"]
    center -->|"method"| N_sync_chromamcpmanager_chromamcpmanager_ishealthy[".isHealthy[]"]
    center -->|"method"| N_sync_chromamcpmanager_chromamcpmanager_probesemanticsearch[".probeSemanticSearch[]"]
    center -->|"method"| N_sync_chromamcpmanager_chromamcpmanager_stop[".stop[]"]
    center -->|"method"| N_sync_chromamcpmanager_chromamcpmanager_killprocesstree[".killProcessTree[]"]
    center -->|"method"| N_sync_chromamcpmanager_chromamcpmanager_collectdescendantpids[".collectDescendantPids[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[.buildCommandArgs()]] - `method` [EXTRACTED]
- [[.callTool()]] - `method` [EXTRACTED]
- [[.collectDescendantPids()]] - `method` [EXTRACTED]
- [[.connectInternal()]] - `method` [EXTRACTED]
- [[.constructor()_42]] - `method` [EXTRACTED]
- [[.ensureConnected()]] - `method` [EXTRACTED]
- [[.getCombinedCertPath()]] - `method` [EXTRACTED]
- [[.getInstance()_2]] - `method` [EXTRACTED]
- [[.getSpawnEnv()]] - `method` [EXTRACTED]
- [[.isHealthy()]] - `method` [EXTRACTED]
- [[.killProcessTree()]] - `method` [EXTRACTED]
- [[.probeSemanticSearch()]] - `method` [EXTRACTED]
- [[.registerManagedProcess()]] - `method` [EXTRACTED]
- [[.reset()]] - `method` [EXTRACTED]
- [[.stop()_1]] - `method` [EXTRACTED]
- [[ChromaMcpManager.ts]] - `contains` [EXTRACTED]
- [[ChromaRoutes.ts]] - `imports` [EXTRACTED]
- [[ChromaSync.ts]] - `imports` [EXTRACTED]
- [[chroma-mcp-manager-ssl.test.ts]] - `imports` [EXTRACTED]
- [[worker-service.ts]] - `imports` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[ChromaMcpManager]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None