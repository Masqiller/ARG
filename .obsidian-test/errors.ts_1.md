---
source_file: "vendor/claude-mem/src/services/worker/search/errors.ts"
type: "code"
community: "Community None"
degree: 5
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# errors.ts

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 5

## Architecture Graph
```mermaid
graph LR
    center["errors.ts"]:::centerNode
    center -->|"imports_from"| N_vendor_claude_mem_src_services_worker_searchmanager_ts["SearchManager.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_services_server_errorhandler_ts["ErrorHandler.ts"]
    center -->|"imports"| N_server_errorhandler_apperror["AppError"]
    center -->|"contains"| N_search_errors_chromaunavailableerror["ChromaUnavailableError"]
    center -->|"imports_from"| N_vendor_claude_mem_src_services_worker_search_searchorchestrator_ts["SearchOrchestrator.ts"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[AppError]] - `imports` [EXTRACTED]
- [[ChromaUnavailableError]] - `contains` [EXTRACTED]
- [[ErrorHandler.ts]] - `imports_from` [EXTRACTED]
- [[SearchManager.ts]] - `imports_from` [EXTRACTED]
- [[SearchOrchestrator.ts]] - `imports_from` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[errors.ts_1]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None