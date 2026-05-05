---
source_file: "vendor/claude-mem/src/ui/viewer/components/ScrollToTop.tsx"
type: "code"
community: "Community None"
degree: 2
location: "L7"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# ScrollToTop()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 2

## Architecture Graph
```mermaid
graph LR
    center["ScrollToTop[]"]:::centerNode
    center -->|"imports"| N_vendor_claude_mem_src_ui_viewer_components_feed_tsx["Feed.tsx"]
    center -->|"contains"| N_vendor_claude_mem_src_ui_viewer_components_scrolltotop_tsx["ScrollToTop.tsx"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[Feed.tsx]] - `imports` [EXTRACTED]
- [[ScrollToTop.tsx]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[ScrollToTop()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None