---
source_file: "vendor/claude-mem/tests/supervisor/health-checker.test.ts"
type: "code"
community: "Community None"
degree: 3
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# health-checker.test.ts

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 3

## Architecture Graph
```mermaid
graph LR
    center["health-checker.test.ts"]:::centerNode
    center -->|"imports_from"| N_vendor_claude_mem_src_supervisor_health_checker_ts["health-checker.ts"]
    center -->|"imports"| N_supervisor_health_checker_starthealthchecker["startHealthChecker[]"]
    center -->|"imports"| N_supervisor_health_checker_stophealthchecker["stopHealthChecker[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[health-checker.ts]] - `imports_from` [EXTRACTED]
- [[startHealthChecker()]] - `imports` [EXTRACTED]
- [[stopHealthChecker()]] - `imports` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[health-checker.test.ts]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None