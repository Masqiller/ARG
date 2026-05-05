---
source_file: "vendor/claude-mem/src/supervisor/env-sanitizer.ts"
type: "code"
community: "Community None"
degree: 9
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# env-sanitizer.ts

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 9

## Architecture Graph
```mermaid
graph LR
    center["env-sanitizer.ts"]:::centerNode
    center -->|"imports_from"| N_vendor_claude_mem_tests_supervisor_env_sanitizer_test_ts["env-sanitizer.test.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_services_worker_service_ts["worker-service.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_services_worker_claudeprovider_ts["ClaudeProvider.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_services_worker_knowledge_knowledgeagent_ts["KnowledgeAgent.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_services_server_server_ts["Server.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_services_sync_chromamcpmanager_ts["ChromaMcpManager.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_services_infrastructure_processmanager_ts["ProcessManager.ts"]
    center -->|"contains"| N_supervisor_env_sanitizer_sanitizeenv["sanitizeEnv[]"]
    center -->|"imports_from"| N_vendor_claude_mem_src_supervisor_process_registry_ts["process-registry.ts"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[ChromaMcpManager.ts]] - `imports_from` [EXTRACTED]
- [[ClaudeProvider.ts]] - `imports_from` [EXTRACTED]
- [[KnowledgeAgent.ts]] - `imports_from` [EXTRACTED]
- [[ProcessManager.ts]] - `imports_from` [EXTRACTED]
- [[Server.ts]] - `imports_from` [EXTRACTED]
- [[env-sanitizer.test.ts]] - `imports_from` [EXTRACTED]
- [[process-registry.ts]] - `imports_from` [EXTRACTED]
- [[sanitizeEnv()]] - `contains` [EXTRACTED]
- [[worker-service.ts]] - `imports_from` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[env-sanitizer.ts]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None