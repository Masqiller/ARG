---
source_file: "vendor/claude-mem/src/shared/EnvManager.ts"
type: "code"
community: "Community None"
degree: 5
location: "L74"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# loadClaudeMemEnv()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 5

## Architecture Graph
```mermaid
graph LR
    center["loadClaudeMemEnv[]"]:::centerNode
    center -->|"contains"| N_vendor_claude_mem_src_shared_envmanager_ts["EnvManager.ts"]
    center -->|"calls"| N_shared_envmanager_parseenvfile["parseEnvFile[]"]
    center -->|"calls"| N_shared_envmanager_buildisolatedenv["buildIsolatedEnv[]"]
    center -->|"calls"| N_shared_envmanager_getcredential["getCredential[]"]
    center -->|"calls"| N_shared_envmanager_hasanthropicapikey["hasAnthropicApiKey[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[EnvManager.ts]] - `contains` [EXTRACTED]
- [[buildIsolatedEnv()]] - `calls` [EXTRACTED]
- [[getCredential()]] - `calls` [EXTRACTED]
- [[hasAnthropicApiKey()]] - `calls` [EXTRACTED]
- [[parseEnvFile()]] - `calls` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[loadClaudeMemEnv()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None