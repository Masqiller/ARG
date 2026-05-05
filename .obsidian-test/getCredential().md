---
source_file: "vendor/claude-mem/src/shared/EnvManager.ts"
type: "code"
community: "Community None"
degree: 8
location: "L269"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# getCredential()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 8

## Architecture Graph
```mermaid
graph LR
    center["getCredential[]"]:::centerNode
    center -->|"contains"| N_vendor_claude_mem_src_shared_envmanager_ts["EnvManager.ts"]
    center -->|"calls"| N_shared_envmanager_loadclaudememenv["loadClaudeMemEnv[]"]
    center -->|"imports"| N_vendor_claude_mem_src_services_worker_openrouterprovider_ts["OpenRouterProvider.ts"]
    center -->|"imports"| N_vendor_claude_mem_src_services_worker_geminiprovider_ts["GeminiProvider.ts"]
    center -->|"calls"| N_worker_openrouterprovider_openrouterprovider_getopenrouterconfig[".getOpenRouterConfig[]"]
    center -->|"calls"| N_worker_openrouterprovider_isopenrouteravailable["isOpenRouterAvailable[]"]
    center -->|"calls"| N_worker_geminiprovider_geminiprovider_getgeminiconfig[".getGeminiConfig[]"]
    center -->|"calls"| N_worker_geminiprovider_isgeminiavailable["isGeminiAvailable[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[.getGeminiConfig()]] - `calls` [INFERRED]
- [[.getOpenRouterConfig()]] - `calls` [INFERRED]
- [[EnvManager.ts]] - `contains` [EXTRACTED]
- [[GeminiProvider.ts]] - `imports` [EXTRACTED]
- [[OpenRouterProvider.ts]] - `imports` [EXTRACTED]
- [[isGeminiAvailable()]] - `calls` [INFERRED]
- [[isOpenRouterAvailable()]] - `calls` [INFERRED]
- [[loadClaudeMemEnv()]] - `calls` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[getCredential()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None