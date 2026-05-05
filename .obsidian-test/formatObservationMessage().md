---
source_file: "vendor/claude-mem/openclaw/src/index.ts"
type: "code"
community: "Community None"
degree: 2
location: "L394"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# formatObservationMessage()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 2

## Architecture Graph
```mermaid
graph LR
    center["formatObservationMessage[]"]:::centerNode
    center -->|"contains"| N_vendor_claude_mem_openclaw_src_index_ts["index.ts"]
    center -->|"calls"| N_src_index_connecttossestream["connectToSSEStream[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[connectToSSEStream()]] - `calls` [EXTRACTED]
- [[index.ts]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[formatObservationMessage()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None