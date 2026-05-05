---
source_file: "vendor/external_plugins/caveman/mcp-servers/caveman-shrink/compress.js"
type: "code"
community: "Community None"
degree: 4
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# compress.js

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 4

## Architecture Graph
```mermaid
graph LR
    center["compress.js"]:::centerNode
    center -->|"contains"| N_caveman_shrink_compress_withprotectedsegments["withProtectedSegments[]"]
    center -->|"contains"| N_caveman_shrink_compress_compressprose["compressProse[]"]
    center -->|"contains"| N_caveman_shrink_compress_compress["compress[]"]
    center -->|"contains"| N_caveman_shrink_compress_compressdescriptionsinplace["compressDescriptionsInPlace[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[compress()]] - `contains` [EXTRACTED]
- [[compressDescriptionsInPlace()]] - `contains` [EXTRACTED]
- [[compressProse()]] - `contains` [EXTRACTED]
- [[withProtectedSegments()]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[compress.js]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None