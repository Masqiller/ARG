---
source_file: "vendor/claude-mem/src/shared/timeline-formatting.ts"
type: "code"
community: "Community None"
degree: 2
location: "L47"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# toRelativePath()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 2

## Architecture Graph
```mermaid
graph LR
    center["toRelativePath[]"]:::centerNode
    center -->|"contains"| N_vendor_claude_mem_src_shared_timeline_formatting_ts["timeline-formatting.ts"]
    center -->|"calls"| N_shared_timeline_formatting_extractfirstfile["extractFirstFile[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[extractFirstFile()]] - `calls` [EXTRACTED]
- [[timeline-formatting.ts]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[toRelativePath()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None