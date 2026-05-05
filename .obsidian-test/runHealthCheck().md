---
source_file: "vendor/claude-mem/src/supervisor/health-checker.ts"
type: "code"
community: "Community None"
degree: 2
location: "L9"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# runHealthCheck()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 2

## Architecture Graph
```mermaid
graph LR
    center["runHealthCheck[]"]:::centerNode
    center -->|"contains"| N_vendor_claude_mem_src_supervisor_health_checker_ts["health-checker.ts"]
    center -->|"calls"| N_supervisor_process_registry_getprocessregistry["getProcessRegistry[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[getProcessRegistry()]] - `calls` [INFERRED]
- [[health-checker.ts]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[runHealthCheck()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None