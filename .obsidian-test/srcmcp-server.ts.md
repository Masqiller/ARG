---
source_file: ""
type: ""
community: "Community None"
degree: 2
tags:
  - graphify/document
  - graphify/EXTRACTED
  - community/Community_None
---

# src/mcp-server.ts

> [!info] Properties
> **File Type**: unknown
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 2

## Architecture Graph
```mermaid
graph LR
    center["src/mcp-server.ts"]:::centerNode
    center -->|"relates"| N_src_skill_mapper_ts["src/skill-mapper.ts"]
    center -->|"relates"| N_src_hooks_ts["src/hooks.ts"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[srchooks.ts]] - `` [EXTRACTED]
- [[srcskill-mapper.ts]] - `` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[srcmcp-server.ts]]
```

#graphify/document #graphify/EXTRACTED #community/Community_None