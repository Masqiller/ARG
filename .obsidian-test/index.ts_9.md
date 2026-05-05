---
source_file: "vendor/claude-mem/src/services/infrastructure/index.ts"
type: "code"
community: "Community None"
degree: 3
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# index.ts

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 3

## Architecture Graph
```mermaid
graph LR
    center["index.ts"]:::centerNode
    center -->|"imports_from"| N_vendor_claude_mem_tests_infrastructure_process_manager_test_ts["process-manager.test.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_tests_infrastructure_graceful_shutdown_test_ts["graceful-shutdown.test.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_tests_infrastructure_health_monitor_test_ts["health-monitor.test.ts"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[graceful-shutdown.test.ts]] - `imports_from` [EXTRACTED]
- [[health-monitor.test.ts]] - `imports_from` [EXTRACTED]
- [[process-manager.test.ts]] - `imports_from` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[index.ts_9]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None