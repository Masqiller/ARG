---
source_file: "vendor/claude-mem/src/services/server/Server.ts"
type: "code"
community: "Community None"
degree: 22
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# Server.ts

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 22

## Architecture Graph
```mermaid
graph LR
    center["Server.ts"]:::centerNode
    center -->|"imports_from"| N_vendor_claude_mem_tests_server_server_test_ts["server.test.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_tests_integration_worker_api_endpoints_test_ts["worker-api-endpoints.test.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_tests_integration_hook_execution_e2e_test_ts["hook-execution-e2e.test.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_shared_uptime_ts["uptime.ts"]
    center -->|"imports"| N_shared_uptime_getuptimeseconds["getUptimeSeconds[]"]
    center -->|"imports_from"| N_vendor_claude_mem_src_services_worker_service_ts["worker-service.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_services_worker_ratelimitstore_ts["RateLimitStore.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_services_server_flushresponsethen_ts["flushResponseThen.ts"]
    center -->|"imports"| N_server_flushresponsethen_flushresponsethen["flushResponseThen[]"]
    center -->|"imports_from"| N_vendor_claude_mem_src_services_server_allowed_constants_ts["allowed-constants.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_services_server_errorhandler_ts["ErrorHandler.ts"]
    center -->|"imports"| N_server_errorhandler_errorhandler["errorHandler[]"]
    center -->|"imports"| N_server_errorhandler_notfoundhandler["notFoundHandler[]"]
    center -->|"imports_from"| N_vendor_claude_mem_src_services_server_middleware_ts["Middleware.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_utils_logger_ts["logger.ts"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[ErrorHandler.ts]] - `imports_from` [EXTRACTED]
- [[Logger]] - `imports` [EXTRACTED]
- [[Middleware.ts]] - `imports_from` [EXTRACTED]
- [[RateLimitStore.ts]] - `imports_from` [EXTRACTED]
- [[Server_1]] - `contains` [EXTRACTED]
- [[allowed-constants.ts]] - `imports_from` [EXTRACTED]
- [[env-sanitizer.ts]] - `imports_from` [EXTRACTED]
- [[errorHandler()]] - `imports` [EXTRACTED]
- [[flushResponseThen()]] - `imports` [EXTRACTED]
- [[flushResponseThen.ts]] - `imports_from` [EXTRACTED]
- [[getSupervisor()]] - `imports` [EXTRACTED]
- [[getUptimeSeconds()]] - `imports` [EXTRACTED]
- [[hook-execution-e2e.test.ts]] - `imports_from` [EXTRACTED]
- [[index.ts_11]] - `imports_from` [EXTRACTED]
- [[isPidAlive()]] - `imports` [EXTRACTED]
- [[logger.ts]] - `imports_from` [EXTRACTED]
- [[notFoundHandler()]] - `imports` [EXTRACTED]
- [[process-registry.ts]] - `imports_from` [EXTRACTED]
- [[server.test.ts]] - `imports_from` [EXTRACTED]
- [[uptime.ts]] - `imports_from` [EXTRACTED]
- [[worker-api-endpoints.test.ts]] - `imports_from` [EXTRACTED]
- [[worker-service.ts]] - `imports_from` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[Server.ts]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None