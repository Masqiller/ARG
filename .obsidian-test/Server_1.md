---
source_file: "vendor/claude-mem/src/services/server/Server.ts"
type: "code"
community: "Community None"
degree: 15
location: "L88"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# Server

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 15

## Architecture Graph
```mermaid
graph LR
    center["Server"]:::centerNode
    center -->|"imports"| N_vendor_claude_mem_tests_server_server_test_ts["server.test.ts"]
    center -->|"imports"| N_vendor_claude_mem_tests_integration_worker_api_endpoints_test_ts["worker-api-endpoints.test.ts"]
    center -->|"imports"| N_vendor_claude_mem_tests_integration_hook_execution_e2e_test_ts["hook-execution-e2e.test.ts"]
    center -->|"imports"| N_vendor_claude_mem_src_services_worker_service_ts["worker-service.ts"]
    center -->|"contains"| N_vendor_claude_mem_src_services_server_server_ts["Server.ts"]
    center -->|"method"| N_server_server_server_constructor[".constructor[]"]
    center -->|"method"| N_server_server_server_gethttpserver[".getHttpServer[]"]
    center -->|"method"| N_server_server_server_listen[".listen[]"]
    center -->|"method"| N_server_server_server_close[".close[]"]
    center -->|"method"| N_server_server_server_registerroutes[".registerRoutes[]"]
    center -->|"method"| N_server_server_server_finalizeroutes[".finalizeRoutes[]"]
    center -->|"method"| N_server_server_server_setupmiddleware[".setupMiddleware[]"]
    center -->|"method"| N_server_server_server_setupcoreroutes[".setupCoreRoutes[]"]
    center -->|"method"| N_server_server_server_extractinstructionsection[".extractInstructionSection[]"]
    center -->|"method"| N_server_server_server_extractbetween[".extractBetween[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[.close()_11]] - `method` [EXTRACTED]
- [[.constructor()_41]] - `method` [EXTRACTED]
- [[.extractBetween()]] - `method` [EXTRACTED]
- [[.extractInstructionSection()]] - `method` [EXTRACTED]
- [[.finalizeRoutes()]] - `method` [EXTRACTED]
- [[.getHttpServer()]] - `method` [EXTRACTED]
- [[.listen()]] - `method` [EXTRACTED]
- [[.registerRoutes()_1]] - `method` [EXTRACTED]
- [[.setupCoreRoutes()]] - `method` [EXTRACTED]
- [[.setupMiddleware()]] - `method` [EXTRACTED]
- [[Server.ts]] - `contains` [EXTRACTED]
- [[hook-execution-e2e.test.ts]] - `imports` [EXTRACTED]
- [[server.test.ts]] - `imports` [EXTRACTED]
- [[worker-api-endpoints.test.ts]] - `imports` [EXTRACTED]
- [[worker-service.ts]] - `imports` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[Server_1]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None