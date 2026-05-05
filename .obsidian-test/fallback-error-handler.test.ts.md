---
source_file: "vendor/claude-mem/tests/worker/agents/fallback-error-handler.test.ts"
type: "code"
community: "Community None"
degree: 4
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# fallback-error-handler.test.ts

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 4

## Architecture Graph
```mermaid
graph LR
    center["fallback-error-handler.test.ts"]:::centerNode
    center -->|"imports_from"| N_vendor_claude_mem_src_services_worker_agents_fallbackerrorhandler_ts["FallbackErrorHandler.ts"]
    center -->|"imports"| N_agents_fallbackerrorhandler_shouldfallbacktoclaude["shouldFallbackToClaude[]"]
    center -->|"imports"| N_agents_fallbackerrorhandler_isaborterror["isAbortError[]"]
    center -->|"imports_from"| N_vendor_claude_mem_src_services_worker_agents_types_ts["types.ts"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[FallbackErrorHandler.ts]] - `imports_from` [EXTRACTED]
- [[isAbortError()]] - `imports` [EXTRACTED]
- [[shouldFallbackToClaude()]] - `imports` [EXTRACTED]
- [[types.ts_1]] - `imports_from` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[fallback-error-handler.test.ts]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None