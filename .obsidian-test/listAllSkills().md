---
source_file: "src/skill-mapper.ts"
type: "code"
community: "Community None"
degree: 2
location: "L319"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# listAllSkills()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 2

## Architecture Graph
```mermaid
graph LR
    center["listAllSkills[]"]:::centerNode
    center -->|"imports"| N_src_mcp_server_ts["mcp-server.ts"]
    center -->|"contains"| N_src_skill_mapper_ts["skill-mapper.ts"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[mcp-server.ts_1]] - `imports` [EXTRACTED]
- [[skill-mapper.ts]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[listAllSkills()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None