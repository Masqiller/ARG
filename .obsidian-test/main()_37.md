---
source_file: "vendor/claude-mem/scripts/investigate-timestamps.ts"
type: "code"
community: "Community None"
degree: 2
location: "L20"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# main()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 2

## Architecture Graph
```mermaid
graph LR
    center["main[]"]:::centerNode
    center -->|"contains"| N_vendor_claude_mem_scripts_investigate_timestamps_ts["investigate-timestamps.ts"]
    center -->|"calls"| N_scripts_investigate_timestamps_formattimestamp["formatTimestamp[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[formatTimestamp()_3]] - `calls` [EXTRACTED]
- [[investigate-timestamps.ts]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[main()_37]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None