---
source_file: "vendor/claude-mem/src/supervisor/health-checker.ts"
type: "code"
community: "Community None"
degree: 4
location: "L27"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# stopHealthChecker()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 4

## Architecture Graph
```mermaid
graph LR
    center["stopHealthChecker[]"]:::centerNode
    center -->|"imports"| N_vendor_claude_mem_tests_supervisor_health_checker_test_ts["health-checker.test.ts"]
    center -->|"imports"| N_vendor_claude_mem_src_supervisor_index_ts["index.ts"]
    center -->|"calls"| N_supervisor_index_supervisor_stop[".stop[]"]
    center -->|"contains"| N_vendor_claude_mem_src_supervisor_health_checker_ts["health-checker.ts"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[.stop()_2]] - `calls` [INFERRED]
- [[health-checker.test.ts]] - `imports` [EXTRACTED]
- [[health-checker.ts]] - `contains` [EXTRACTED]
- [[index.ts_11]] - `imports` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[stopHealthChecker()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None