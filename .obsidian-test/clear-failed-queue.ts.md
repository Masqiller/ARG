---
source_file: "vendor/claude-mem/scripts/clear-failed-queue.ts"
type: "code"
community: "Community None"
degree: 3
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# clear-failed-queue.ts

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 3

## Architecture Graph
```mermaid
graph LR
    center["clear-failed-queue.ts"]:::centerNode
    center -->|"contains"| N_scripts_clear_failed_queue_resolvedbpath["resolveDbPath[]"]
    center -->|"contains"| N_scripts_clear_failed_queue_prompt["prompt[]"]
    center -->|"contains"| N_scripts_clear_failed_queue_main["main[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[main()_29]] - `contains` [EXTRACTED]
- [[prompt()]] - `contains` [EXTRACTED]
- [[resolveDbPath()]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[clear-failed-queue.ts]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None