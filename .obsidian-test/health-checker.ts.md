---
source_file: "vendor/claude-mem/src/supervisor/health-checker.ts"
type: "code"
community: "Community None"
degree: 9
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# health-checker.ts

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 9

## Architecture Graph
```mermaid
graph LR
    center["health-checker.ts"]:::centerNode
    center -->|"imports_from"| N_vendor_claude_mem_tests_supervisor_health_checker_test_ts["health-checker.test.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_supervisor_index_ts["index.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_utils_logger_ts["logger.ts"]
    center -->|"imports"| N_utils_logger_logger["Logger"]
    center -->|"imports_from"| N_vendor_claude_mem_src_supervisor_process_registry_ts["process-registry.ts"]
    center -->|"imports"| N_supervisor_process_registry_getprocessregistry["getProcessRegistry[]"]
    center -->|"contains"| N_supervisor_health_checker_runhealthcheck["runHealthCheck[]"]
    center -->|"contains"| N_supervisor_health_checker_starthealthchecker["startHealthChecker[]"]
    center -->|"contains"| N_supervisor_health_checker_stophealthchecker["stopHealthChecker[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[Logger]] - `imports` [EXTRACTED]
- [[getProcessRegistry()]] - `imports` [EXTRACTED]
- [[health-checker.test.ts]] - `imports_from` [EXTRACTED]
- [[index.ts_11]] - `imports_from` [EXTRACTED]
- [[logger.ts]] - `imports_from` [EXTRACTED]
- [[process-registry.ts]] - `imports_from` [EXTRACTED]
- [[runHealthCheck()]] - `contains` [EXTRACTED]
- [[startHealthChecker()]] - `contains` [EXTRACTED]
- [[stopHealthChecker()]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[health-checker.ts]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None