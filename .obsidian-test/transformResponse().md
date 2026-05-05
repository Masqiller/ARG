---
source_file: "vendor/external_plugins/caveman/mcp-servers/caveman-shrink/index.js"
type: "code"
community: "Community None"
degree: 3
location: "L73"
tags:
  - graphify/code
  - graphify/INFERRED
  - community/Community_None
---

# transformResponse()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 3

## Architecture Graph
```mermaid
graph LR
    center["transformResponse[]"]:::centerNode
    center -->|"calls"| N_caveman_shrink_compress_compress["compress[]"]
    center -->|"calls"| N_caveman_shrink_compress_compressdescriptionsinplace["compressDescriptionsInPlace[]"]
    center -->|"contains"| N_vendor_external_plugins_caveman_mcp_servers_caveman_shrink_index_js["index.js"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[compress()]] - `calls` [INFERRED]
- [[compressDescriptionsInPlace()]] - `calls` [INFERRED]
- [[index.js]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[transformResponse()]]
```

#graphify/code #graphify/INFERRED #community/Community_None