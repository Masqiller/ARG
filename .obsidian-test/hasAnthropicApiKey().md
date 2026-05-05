---
source_file: "vendor/claude-mem/src/shared/EnvManager.ts"
type: "code"
community: "Community None"
degree: 3
location: "L274"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# hasAnthropicApiKey()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 3

## Architecture Graph
```mermaid
graph LR
    center["hasAnthropicApiKey[]"]:::centerNode
    center -->|"contains"| N_vendor_claude_mem_src_shared_envmanager_ts["EnvManager.ts"]
    center -->|"calls"| N_shared_envmanager_loadclaudememenv["loadClaudeMemEnv[]"]
    center -->|"calls"| N_shared_envmanager_getauthmethoddescription["getAuthMethodDescription[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[EnvManager.ts]] - `contains` [EXTRACTED]
- [[getAuthMethodDescription()]] - `calls` [EXTRACTED]
- [[loadClaudeMemEnv()]] - `calls` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[hasAnthropicApiKey()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None