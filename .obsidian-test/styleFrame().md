---
source_file: "vendor/claude-mem/src/npx-cli/banner.ts"
type: "code"
community: "Community None"
degree: 3
location: "L42"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# styleFrame()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 3

## Architecture Graph
```mermaid
graph LR
    center["styleFrame[]"]:::centerNode
    center -->|"contains"| N_vendor_claude_mem_src_npx_cli_banner_ts["banner.ts"]
    center -->|"calls"| N_npx_cli_banner_primarycolor["primaryColor[]"]
    center -->|"calls"| N_npx_cli_banner_accentcolor["accentColor[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[accentColor()]] - `calls` [EXTRACTED]
- [[banner.ts]] - `contains` [EXTRACTED]
- [[primaryColor()]] - `calls` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[styleFrame()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None