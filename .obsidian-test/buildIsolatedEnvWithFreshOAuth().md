---
source_file: "vendor/claude-mem/src/shared/EnvManager.ts"
type: "code"
community: "Community None"
degree: 7
location: "L206"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# buildIsolatedEnvWithFreshOAuth()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 7

## Architecture Graph
```mermaid
graph LR
    center["buildIsolatedEnvWithFreshOAuth[]"]:::centerNode
    center -->|"contains"| N_vendor_claude_mem_src_shared_envmanager_ts["EnvManager.ts"]
    center -->|"calls"| N_shared_envmanager_buildisolatedenv["buildIsolatedEnv[]"]
    center -->|"imports"| N_vendor_claude_mem_src_services_worker_claudeprovider_ts["ClaudeProvider.ts"]
    center -->|"imports"| N_vendor_claude_mem_src_services_worker_knowledge_knowledgeagent_ts["KnowledgeAgent.ts"]
    center -->|"calls"| N_worker_claudeprovider_claudeprovider_startsession[".startSession[]"]
    center -->|"calls"| N_knowledge_knowledgeagent_knowledgeagent_prime[".prime[]"]
    center -->|"calls"| N_knowledge_knowledgeagent_knowledgeagent_executequery[".executeQuery[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[.executeQuery()]] - `calls` [INFERRED]
- [[.prime()]] - `calls` [INFERRED]
- [[.startSession()]] - `calls` [INFERRED]
- [[ClaudeProvider.ts]] - `imports` [EXTRACTED]
- [[EnvManager.ts]] - `contains` [EXTRACTED]
- [[KnowledgeAgent.ts]] - `imports` [EXTRACTED]
- [[buildIsolatedEnv()]] - `calls` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[buildIsolatedEnvWithFreshOAuth()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None