---
source_file: "vendor/claude-mem/src/services/worker/agents/SessionCleanupHelper.ts"
type: "code"
community: "Community None"
degree: 6
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# SessionCleanupHelper.ts

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 6

## Architecture Graph
```mermaid
graph LR
    center["SessionCleanupHelper.ts"]:::centerNode
    center -->|"imports_from"| N_vendor_claude_mem_tests_worker_agents_session_cleanup_helper_test_ts["session-cleanup-helper.test.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_services_worker_types_ts["worker-types.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_utils_logger_ts["logger.ts"]
    center -->|"imports"| N_utils_logger_logger["Logger"]
    center -->|"imports_from"| N_vendor_claude_mem_src_services_worker_agents_types_ts["types.ts"]
    center -->|"contains"| N_agents_sessioncleanuphelper_cleanupprocessedmessages["cleanupProcessedMessages[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[Logger]] - `imports` [EXTRACTED]
- [[cleanupProcessedMessages()]] - `contains` [EXTRACTED]
- [[logger.ts]] - `imports_from` [EXTRACTED]
- [[session-cleanup-helper.test.ts]] - `imports_from` [EXTRACTED]
- [[types.ts_1]] - `imports_from` [EXTRACTED]
- [[worker-types.ts]] - `imports_from` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[SessionCleanupHelper.ts]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None