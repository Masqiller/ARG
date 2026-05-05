---
source_file: "vendor/claude-mem/src/shared/worker-utils.ts"
type: "code"
community: "Community None"
degree: 2
location: "L64"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# clearPortCache()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 2

## Architecture Graph
```mermaid
graph LR
    center["clearPortCache[]"]:::centerNode
    center -->|"contains"| N_vendor_claude_mem_src_shared_worker_utils_ts["worker-utils.ts"]
    center -->|"imports"| N_vendor_claude_mem_src_services_worker_http_routes_settingsroutes_ts["SettingsRoutes.ts"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[SettingsRoutes.ts]] - `imports` [EXTRACTED]
- [[worker-utils.ts]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[clearPortCache()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None