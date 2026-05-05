---
source_file: "vendor/claude-mem/src/ui/viewer/hooks/useGitHubStars.ts"
type: "code"
community: "Community None"
degree: 3
location: "L13"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# useGitHubStars()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 3

## Architecture Graph
```mermaid
graph LR
    center["useGitHubStars[]"]:::centerNode
    center -->|"imports"| N_vendor_claude_mem_src_ui_viewer_components_githubstarsbutton_tsx["GitHubStarsButton.tsx"]
    center -->|"calls"| N_components_githubstarsbutton_githubstarsbutton["GitHubStarsButton[]"]
    center -->|"contains"| N_vendor_claude_mem_src_ui_viewer_hooks_usegithubstars_ts["useGitHubStars.ts"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[GitHubStarsButton()]] - `calls` [INFERRED]
- [[GitHubStarsButton.tsx]] - `imports` [EXTRACTED]
- [[useGitHubStars.ts]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[useGitHubStars()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None