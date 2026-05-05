---
source_file: "vendor/claude-mem/src/shared/EnvManager.ts"
type: "code"
community: "Community None"
degree: 5
location: "L279"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# getAuthMethodDescription()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 5

## Architecture Graph
```mermaid
graph LR
    center["getAuthMethodDescription[]"]:::centerNode
    center -->|"contains"| N_vendor_claude_mem_src_shared_envmanager_ts["EnvManager.ts"]
    center -->|"calls"| N_shared_envmanager_hasanthropicapikey["hasAnthropicApiKey[]"]
    center -->|"imports"| N_vendor_claude_mem_src_services_worker_service_ts["worker-service.ts"]
    center -->|"imports"| N_vendor_claude_mem_src_services_worker_claudeprovider_ts["ClaudeProvider.ts"]
    center -->|"calls"| N_worker_claudeprovider_claudeprovider_startsession[".startSession[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[.startSession()]] - `calls` [INFERRED]
- [[ClaudeProvider.ts]] - `imports` [EXTRACTED]
- [[EnvManager.ts]] - `contains` [EXTRACTED]
- [[hasAnthropicApiKey()]] - `calls` [EXTRACTED]
- [[worker-service.ts]] - `imports` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[getAuthMethodDescription()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None