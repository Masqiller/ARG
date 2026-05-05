---
source_file: "vendor/claude-mem/src/services/worker/agents/types.ts"
type: "code"
community: "Community None"
degree: 10
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# types.ts

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 10

## Architecture Graph
```mermaid
graph LR
    center["types.ts"]:::centerNode
    center -->|"imports_from"| N_vendor_claude_mem_tests_worker_agents_fallback_error_handler_test_ts["fallback-error-handler.test.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_tests_worker_agents_session_cleanup_helper_test_ts["session-cleanup-helper.test.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_tests_worker_agents_response_processor_test_ts["response-processor.test.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_sdk_parser_ts["parser.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_services_worker_service_ts["worker-service.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_services_worker_types_ts["worker-types.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_services_worker_agents_sessioncleanuphelper_ts["SessionCleanupHelper.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_services_worker_agents_responseprocessor_ts["ResponseProcessor.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_services_worker_agents_fallbackerrorhandler_ts["FallbackErrorHandler.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_services_worker_agents_observationbroadcaster_ts["ObservationBroadcaster.ts"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[FallbackErrorHandler.ts]] - `imports_from` [EXTRACTED]
- [[ObservationBroadcaster.ts]] - `imports_from` [EXTRACTED]
- [[ResponseProcessor.ts]] - `imports_from` [EXTRACTED]
- [[SessionCleanupHelper.ts]] - `imports_from` [EXTRACTED]
- [[fallback-error-handler.test.ts]] - `imports_from` [EXTRACTED]
- [[parser.ts]] - `imports_from` [EXTRACTED]
- [[response-processor.test.ts]] - `imports_from` [EXTRACTED]
- [[session-cleanup-helper.test.ts]] - `imports_from` [EXTRACTED]
- [[worker-service.ts]] - `imports_from` [EXTRACTED]
- [[worker-types.ts]] - `imports_from` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[types.ts_1]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None