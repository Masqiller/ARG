---
source_file: "vendor/claude-mem/src/shared/should-track-project.ts"
type: "code"
community: "Community None"
degree: 2
location: "L7"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# isWithin()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 2

## Architecture Graph
```mermaid
graph LR
    center["isWithin[]"]:::centerNode
    center -->|"contains"| N_vendor_claude_mem_src_shared_should_track_project_ts["should-track-project.ts"]
    center -->|"calls"| N_shared_should_track_project_shouldtrackproject["shouldTrackProject[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[should-track-project.ts]] - `contains` [EXTRACTED]
- [[shouldTrackProject()]] - `calls` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[isWithin()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None