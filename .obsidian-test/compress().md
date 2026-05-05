---
source_file: "vendor/external_plugins/caveman/mcp-servers/caveman-shrink/compress.js"
type: "code"
community: "Community None"
degree: 4
location: "L91"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# compress()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 4

## Architecture Graph
```mermaid
graph LR
    center["compress[]"]:::centerNode
    center -->|"contains"| N_vendor_external_plugins_caveman_mcp_servers_caveman_shrink_compress_js["compress.js"]
    center -->|"calls"| N_caveman_shrink_compress_withprotectedsegments["withProtectedSegments[]"]
    center -->|"calls"| N_caveman_shrink_compress_compressdescriptionsinplace["compressDescriptionsInPlace[]"]
    center -->|"calls"| N_caveman_shrink_index_transformresponse["transformResponse[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[compress.js]] - `contains` [EXTRACTED]
- [[compressDescriptionsInPlace()]] - `calls` [EXTRACTED]
- [[transformResponse()]] - `calls` [INFERRED]
- [[withProtectedSegments()]] - `calls` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[compress()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None