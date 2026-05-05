---
source_file: "vendor/claude-mem/src/ui/viewer/utils/formatNumber.ts"
type: "code"
community: "Community None"
degree: 3
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# formatStarCount()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 3

## Architecture Graph
```mermaid
graph LR
    center["formatStarCount[]"]:::centerNode
    center -->|"imports"| N_vendor_claude_mem_src_ui_viewer_components_githubstarsbutton_tsx["GitHubStarsButton.tsx"]
    center -->|"calls"| N_components_githubstarsbutton_githubstarsbutton["GitHubStarsButton[]"]
    center -->|"contains"| N_vendor_claude_mem_src_ui_viewer_utils_formatnumber_ts["formatNumber.ts"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[GitHubStarsButton()]] - `calls` [INFERRED]
- [[GitHubStarsButton.tsx]] - `imports` [EXTRACTED]
- [[formatNumber.ts]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[formatStarCount()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None