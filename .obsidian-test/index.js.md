---
source_file: "vendor/external_plugins/caveman/mcp-servers/caveman-shrink/index.js"
type: "code"
community: "Community None"
degree: 2
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# index.js

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 2

## Architecture Graph
```mermaid
graph LR
    center["index.js"]:::centerNode
    center -->|"contains"| N_caveman_shrink_index_makelinebuffer["makeLineBuffer[]"]
    center -->|"contains"| N_caveman_shrink_index_transformresponse["transformResponse[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[makeLineBuffer()]] - `contains` [EXTRACTED]
- [[transformResponse()]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[index.js]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None