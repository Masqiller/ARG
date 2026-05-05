---
source_file: "vendor/claude-mem/src/services/worker/agents/FallbackErrorHandler.ts"
type: "code"
community: "Community None"
degree: 3
location: "L5"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# shouldFallbackToClaude()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 3

## Architecture Graph
```mermaid
graph LR
    center["shouldFallbackToClaude[]"]:::centerNode
    center -->|"imports"| N_vendor_claude_mem_tests_worker_agents_fallback_error_handler_test_ts["fallback-error-handler.test.ts"]
    center -->|"contains"| N_vendor_claude_mem_src_services_worker_agents_fallbackerrorhandler_ts["FallbackErrorHandler.ts"]
    center -->|"calls"| N_agents_fallbackerrorhandler_geterrormessage["getErrorMessage[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[FallbackErrorHandler.ts]] - `contains` [EXTRACTED]
- [[fallback-error-handler.test.ts]] - `imports` [EXTRACTED]
- [[getErrorMessage()]] - `calls` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[shouldFallbackToClaude()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None