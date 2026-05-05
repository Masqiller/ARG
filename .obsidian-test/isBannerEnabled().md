---
source_file: "vendor/claude-mem/src/npx-cli/banner.ts"
type: "code"
community: "Community None"
degree: 2
location: "L99"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# isBannerEnabled()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 2

## Architecture Graph
```mermaid
graph LR
    center["isBannerEnabled[]"]:::centerNode
    center -->|"contains"| N_vendor_claude_mem_src_npx_cli_banner_ts["banner.ts"]
    center -->|"calls"| N_npx_cli_banner_playbanner["playBanner[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[banner.ts]] - `contains` [EXTRACTED]
- [[playBanner()]] - `calls` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[isBannerEnabled()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None