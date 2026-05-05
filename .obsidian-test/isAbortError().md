---
source_file: "vendor/claude-mem/src/services/worker/agents/FallbackErrorHandler.ts"
type: "code"
community: "Community None"
degree: 4
location: "L31"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# isAbortError()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 4

## Architecture Graph
```mermaid
graph LR
    center["isAbortError[]"]:::centerNode
    center -->|"imports"| N_vendor_claude_mem_tests_worker_agents_fallback_error_handler_test_ts["fallback-error-handler.test.ts"]
    center -->|"calls"| N_worker_openrouterprovider_openrouterprovider_handlesessionerror[".handleSessionError[]"]
    center -->|"calls"| N_worker_geminiprovider_geminiprovider_handlegeminierror[".handleGeminiError[]"]
    center -->|"contains"| N_vendor_claude_mem_src_services_worker_agents_fallbackerrorhandler_ts["FallbackErrorHandler.ts"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[.handleGeminiError()]] - `calls` [INFERRED]
- [[.handleSessionError()]] - `calls` [INFERRED]
- [[FallbackErrorHandler.ts]] - `contains` [EXTRACTED]
- [[fallback-error-handler.test.ts]] - `imports` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[isAbortError()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None