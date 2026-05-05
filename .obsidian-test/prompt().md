---
source_file: "vendor/claude-mem/scripts/clear-failed-queue.ts"
type: "code"
community: "Community None"
degree: 2
location: "L16"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# prompt()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 2

## Architecture Graph
```mermaid
graph LR
    center["prompt[]"]:::centerNode
    center -->|"contains"| N_vendor_claude_mem_scripts_clear_failed_queue_ts["clear-failed-queue.ts"]
    center -->|"calls"| N_scripts_clear_failed_queue_main["main[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[clear-failed-queue.ts]] - `contains` [EXTRACTED]
- [[main()_29]] - `calls` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[prompt()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None