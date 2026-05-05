---
source_file: "vendor/claude-mem/src/npx-cli/banner.ts"
type: "code"
community: "Community None"
degree: 12
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# banner.ts

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 12

## Architecture Graph
```mermaid
graph LR
    center["banner.ts"]:::centerNode
    center -->|"imports_from"| N_vendor_claude_mem_src_npx_cli_banner_frames_ts["banner-frames.ts"]
    center -->|"contains"| N_npx_cli_banner_primarycolor["primaryColor[]"]
    center -->|"contains"| N_npx_cli_banner_accentcolor["accentColor[]"]
    center -->|"contains"| N_npx_cli_banner_getframes["getFrames[]"]
    center -->|"contains"| N_npx_cli_banner_styleframe["styleFrame[]"]
    center -->|"contains"| N_npx_cli_banner_detecttruecolor["detectTruecolor[]"]
    center -->|"contains"| N_npx_cli_banner_writebubblerow["writeBubbleRow[]"]
    center -->|"contains"| N_npx_cli_banner_writetaglinerow["writeTaglineRow[]"]
    center -->|"contains"| N_npx_cli_banner_isbannerenabled["isBannerEnabled[]"]
    center -->|"contains"| N_npx_cli_banner_sleep["sleep[]"]
    center -->|"contains"| N_npx_cli_banner_playbanner["playBanner[]"]
    center -->|"imports_from"| N_vendor_claude_mem_src_npx_cli_commands_install_ts["install.ts"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[accentColor()]] - `contains` [EXTRACTED]
- [[banner-frames.ts]] - `imports_from` [EXTRACTED]
- [[detectTruecolor()]] - `contains` [EXTRACTED]
- [[getFrames()]] - `contains` [EXTRACTED]
- [[install.ts]] - `imports_from` [EXTRACTED]
- [[isBannerEnabled()]] - `contains` [EXTRACTED]
- [[playBanner()]] - `contains` [EXTRACTED]
- [[primaryColor()]] - `contains` [EXTRACTED]
- [[sleep()_1]] - `contains` [EXTRACTED]
- [[styleFrame()]] - `contains` [EXTRACTED]
- [[writeBubbleRow()]] - `contains` [EXTRACTED]
- [[writeTaglineRow()]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[banner.ts]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None