---
source_file: "vendor/claude-mem/src/services/worker/agents/FallbackErrorHandler.ts"
type: "code"
community: "Community None"
degree: 7
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# FallbackErrorHandler.ts

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 7

## Architecture Graph
```mermaid
graph LR
    center["FallbackErrorHandler.ts"]:::centerNode
    center -->|"imports_from"| N_vendor_claude_mem_tests_worker_agents_fallback_error_handler_test_ts["fallback-error-handler.test.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_services_worker_agents_types_ts["types.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_utils_logger_ts["logger.ts"]
    center -->|"imports"| N_utils_logger_logger["Logger"]
    center -->|"contains"| N_agents_fallbackerrorhandler_shouldfallbacktoclaude["shouldFallbackToClaude[]"]
    center -->|"contains"| N_agents_fallbackerrorhandler_geterrormessage["getErrorMessage[]"]
    center -->|"contains"| N_agents_fallbackerrorhandler_isaborterror["isAbortError[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[Logger]] - `imports` [EXTRACTED]
- [[fallback-error-handler.test.ts]] - `imports_from` [EXTRACTED]
- [[getErrorMessage()]] - `contains` [EXTRACTED]
- [[isAbortError()]] - `contains` [EXTRACTED]
- [[logger.ts]] - `imports_from` [EXTRACTED]
- [[shouldFallbackToClaude()]] - `contains` [EXTRACTED]
- [[types.ts_1]] - `imports_from` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[FallbackErrorHandler.ts]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None