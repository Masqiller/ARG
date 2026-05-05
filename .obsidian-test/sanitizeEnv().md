---
source_file: "vendor/claude-mem/src/supervisor/env-sanitizer.ts"
type: "code"
community: "Community None"
degree: 15
location: "L38"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# sanitizeEnv()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 15

## Architecture Graph
```mermaid
graph LR
    center["sanitizeEnv[]"]:::centerNode
    center -->|"imports"| N_vendor_claude_mem_tests_supervisor_env_sanitizer_test_ts["env-sanitizer.test.ts"]
    center -->|"imports"| N_vendor_claude_mem_src_services_worker_service_ts["worker-service.ts"]
    center -->|"calls"| N_services_worker_service_workerservice_runmcpselfcheck[".runMcpSelfCheck[]"]
    center -->|"imports"| N_vendor_claude_mem_src_services_worker_claudeprovider_ts["ClaudeProvider.ts"]
    center -->|"calls"| N_worker_claudeprovider_claudeprovider_startsession[".startSession[]"]
    center -->|"imports"| N_vendor_claude_mem_src_services_worker_knowledge_knowledgeagent_ts["KnowledgeAgent.ts"]
    center -->|"calls"| N_knowledge_knowledgeagent_knowledgeagent_prime[".prime[]"]
    center -->|"calls"| N_knowledge_knowledgeagent_knowledgeagent_executequery[".executeQuery[]"]
    center -->|"imports"| N_vendor_claude_mem_src_services_sync_chromamcpmanager_ts["ChromaMcpManager.ts"]
    center -->|"calls"| N_sync_chromamcpmanager_chromamcpmanager_getspawnenv[".getSpawnEnv[]"]
    center -->|"imports"| N_vendor_claude_mem_src_services_infrastructure_processmanager_ts["ProcessManager.ts"]
    center -->|"calls"| N_infrastructure_processmanager_spawndaemon["spawnDaemon[]"]
    center -->|"contains"| N_vendor_claude_mem_src_supervisor_env_sanitizer_ts["env-sanitizer.ts"]
    center -->|"imports"| N_vendor_claude_mem_src_supervisor_process_registry_ts["process-registry.ts"]
    center -->|"calls"| N_supervisor_process_registry_spawnsdkprocess["spawnSdkProcess[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[.executeQuery()]] - `calls` [INFERRED]
- [[.getSpawnEnv()]] - `calls` [INFERRED]
- [[.prime()]] - `calls` [INFERRED]
- [[.runMcpSelfCheck()]] - `calls` [INFERRED]
- [[.startSession()]] - `calls` [INFERRED]
- [[ChromaMcpManager.ts]] - `imports` [EXTRACTED]
- [[ClaudeProvider.ts]] - `imports` [EXTRACTED]
- [[KnowledgeAgent.ts]] - `imports` [EXTRACTED]
- [[ProcessManager.ts]] - `imports` [EXTRACTED]
- [[env-sanitizer.test.ts]] - `imports` [EXTRACTED]
- [[env-sanitizer.ts]] - `contains` [EXTRACTED]
- [[process-registry.ts]] - `imports` [EXTRACTED]
- [[spawnDaemon()]] - `calls` [INFERRED]
- [[spawnSdkProcess()]] - `calls` [INFERRED]
- [[worker-service.ts]] - `imports` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[sanitizeEnv()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None