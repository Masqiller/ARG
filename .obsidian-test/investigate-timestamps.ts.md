---
source_file: "vendor/claude-mem/scripts/investigate-timestamps.ts"
type: "code"
community: "Community None"
degree: 2
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# investigate-timestamps.ts

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 2

## Architecture Graph
```mermaid
graph LR
    center["investigate-timestamps.ts"]:::centerNode
    center -->|"contains"| N_scripts_investigate_timestamps_formattimestamp["formatTimestamp[]"]
    center -->|"contains"| N_scripts_investigate_timestamps_main["main[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[formatTimestamp()_3]] - `contains` [EXTRACTED]
- [[main()_37]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[investigate-timestamps.ts]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None