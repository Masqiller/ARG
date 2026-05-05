---
source_file: "vendor/claude-mem/tests/worker/agents/session-cleanup-helper.test.ts"
type: "code"
community: "Community None"
degree: 6
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# session-cleanup-helper.test.ts

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 6

## Architecture Graph
```mermaid
graph LR
    center["session-cleanup-helper.test.ts"]:::centerNode
    center -->|"imports_from"| N_vendor_claude_mem_src_services_worker_agents_sessioncleanuphelper_ts["SessionCleanupHelper.ts"]
    center -->|"imports"| N_agents_sessioncleanuphelper_cleanupprocessedmessages["cleanupProcessedMessages[]"]
    center -->|"imports_from"| N_vendor_claude_mem_src_services_worker_agents_types_ts["types.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_services_worker_types_ts["worker-types.ts"]
    center -->|"contains"| N_agents_session_cleanup_helper_test_createmocksession["createMockSession[]"]
    center -->|"contains"| N_agents_session_cleanup_helper_test_createmockworker["createMockWorker[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[SessionCleanupHelper.ts]] - `imports_from` [EXTRACTED]
- [[cleanupProcessedMessages()]] - `imports` [EXTRACTED]
- [[createMockSession()_1]] - `contains` [EXTRACTED]
- [[createMockWorker()]] - `contains` [EXTRACTED]
- [[types.ts_1]] - `imports_from` [EXTRACTED]
- [[worker-types.ts]] - `imports_from` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[session-cleanup-helper.test.ts]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None