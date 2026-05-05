---
source_file: "vendor/claude-mem/scripts/generate-banner-frames.mjs"
type: "code"
community: "Community None"
degree: 4
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# generate-banner-frames.mjs

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 4

## Architecture Graph
```mermaid
graph LR
    center["generate-banner-frames.mjs"]:::centerNode
    center -->|"contains"| N_scripts_generate_banner_frames_rasterize["rasterize[]"]
    center -->|"contains"| N_scripts_generate_banner_frames_densitytochar["densityToChar[]"]
    center -->|"contains"| N_scripts_generate_banner_frames_renderascii["renderASCII[]"]
    center -->|"contains"| N_scripts_generate_banner_frames_main["main[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[densityToChar()]] - `contains` [EXTRACTED]
- [[main()_30]] - `contains` [EXTRACTED]
- [[rasterize()]] - `contains` [EXTRACTED]
- [[renderASCII()]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[generate-banner-frames.mjs]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None