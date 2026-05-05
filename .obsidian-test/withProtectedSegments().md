---
source_file: "vendor/external_plugins/caveman/mcp-servers/caveman-shrink/compress.js"
type: "code"
community: "Community None"
degree: 3
location: "L58"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# withProtectedSegments()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 3

## Architecture Graph
```mermaid
graph LR
    center["withProtectedSegments[]"]:::centerNode
    center -->|"calls"| N_fixtures_sample_dataprocessor_transform[".Transform[]"]
    center -->|"contains"| N_vendor_external_plugins_caveman_mcp_servers_caveman_shrink_compress_js["compress.js"]
    center -->|"calls"| N_caveman_shrink_compress_compress["compress[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[.Transform()]] - `calls` [INFERRED]
- [[compress()]] - `calls` [EXTRACTED]
- [[compress.js]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[withProtectedSegments()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None