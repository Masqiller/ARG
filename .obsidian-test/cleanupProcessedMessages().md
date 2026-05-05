---
source_file: "vendor/claude-mem/src/services/worker/agents/SessionCleanupHelper.ts"
type: "code"
community: "Community None"
degree: 2
location: "L6"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# cleanupProcessedMessages()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 2

## Architecture Graph
```mermaid
graph LR
    center["cleanupProcessedMessages[]"]:::centerNode
    center -->|"imports"| N_vendor_claude_mem_tests_worker_agents_session_cleanup_helper_test_ts["session-cleanup-helper.test.ts"]
    center -->|"contains"| N_vendor_claude_mem_src_services_worker_agents_sessioncleanuphelper_ts["SessionCleanupHelper.ts"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[SessionCleanupHelper.ts]] - `contains` [EXTRACTED]
- [[session-cleanup-helper.test.ts]] - `imports` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[cleanupProcessedMessages()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None