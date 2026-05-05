---
source_file: "vendor/claude-mem/src/services/worker/search/errors.ts"
type: "code"
community: "Community None"
degree: 4
location: "L4"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# ChromaUnavailableError

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 4

## Architecture Graph
```mermaid
graph LR
    center["ChromaUnavailableError"]:::centerNode
    center -->|"imports"| N_vendor_claude_mem_src_services_worker_searchmanager_ts["SearchManager.ts"]
    center -->|"contains"| N_vendor_claude_mem_src_services_worker_search_errors_ts["errors.ts"]
    center -->|"method"| N_search_errors_chromaunavailableerror_constructor[".constructor[]"]
    center -->|"imports"| N_vendor_claude_mem_src_services_worker_search_searchorchestrator_ts["SearchOrchestrator.ts"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[.constructor()_13]] - `method` [EXTRACTED]
- [[SearchManager.ts]] - `imports` [EXTRACTED]
- [[SearchOrchestrator.ts]] - `imports` [EXTRACTED]
- [[errors.ts_1]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[ChromaUnavailableError]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None