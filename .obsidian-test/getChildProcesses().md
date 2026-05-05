---
source_file: "vendor/claude-mem/src/services/infrastructure/ProcessManager.ts"
type: "code"
community: "Community None"
degree: 1
location: "L175"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# getChildProcesses()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 1

## Architecture Graph
```mermaid
graph LR
    center["getChildProcesses[]"]:::centerNode
    center -->|"contains"| N_vendor_claude_mem_src_services_infrastructure_processmanager_ts["ProcessManager.ts"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[ProcessManager.ts]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[getChildProcesses()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None