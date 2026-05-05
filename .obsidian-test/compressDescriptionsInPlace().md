---
source_file: "vendor/external_plugins/caveman/mcp-servers/caveman-shrink/compress.js"
type: "code"
community: "Community None"
degree: 3
location: "L102"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# compressDescriptionsInPlace()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 3

## Architecture Graph
```mermaid
graph LR
    center["compressDescriptionsInPlace[]"]:::centerNode
    center -->|"contains"| N_vendor_external_plugins_caveman_mcp_servers_caveman_shrink_compress_js["compress.js"]
    center -->|"calls"| N_caveman_shrink_compress_compress["compress[]"]
    center -->|"calls"| N_caveman_shrink_index_transformresponse["transformResponse[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[compress()]] - `calls` [EXTRACTED]
- [[compress.js]] - `contains` [EXTRACTED]
- [[transformResponse()]] - `calls` [INFERRED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[compressDescriptionsInPlace()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None