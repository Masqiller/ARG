---
source_file: "vendor/claude-mem/src/services/worker/agents/FallbackErrorHandler.ts"
type: "code"
community: "Community None"
degree: 2
location: "L11"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# getErrorMessage()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 2

## Architecture Graph
```mermaid
graph LR
    center["getErrorMessage[]"]:::centerNode
    center -->|"contains"| N_vendor_claude_mem_src_services_worker_agents_fallbackerrorhandler_ts["FallbackErrorHandler.ts"]
    center -->|"calls"| N_agents_fallbackerrorhandler_shouldfallbacktoclaude["shouldFallbackToClaude[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[FallbackErrorHandler.ts]] - `contains` [EXTRACTED]
- [[shouldFallbackToClaude()]] - `calls` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[getErrorMessage()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None