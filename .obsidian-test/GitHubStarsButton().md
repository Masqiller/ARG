---
source_file: "vendor/claude-mem/src/ui/viewer/components/GitHubStarsButton.tsx"
type: "code"
community: "Community None"
degree: 4
location: "L11"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# GitHubStarsButton()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 4

## Architecture Graph
```mermaid
graph LR
    center["GitHubStarsButton[]"]:::centerNode
    center -->|"imports"| N_vendor_claude_mem_src_ui_viewer_components_header_tsx["Header.tsx"]
    center -->|"contains"| N_vendor_claude_mem_src_ui_viewer_components_githubstarsbutton_tsx["GitHubStarsButton.tsx"]
    center -->|"calls"| N_hooks_usegithubstars_usegithubstars["useGitHubStars[]"]
    center -->|"calls"| N_utils_formatnumber_formatstarcount["formatStarCount[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[GitHubStarsButton.tsx]] - `contains` [EXTRACTED]
- [[Header.tsx]] - `imports` [EXTRACTED]
- [[formatStarCount()]] - `calls` [INFERRED]
- [[useGitHubStars()]] - `calls` [INFERRED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[GitHubStarsButton()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None