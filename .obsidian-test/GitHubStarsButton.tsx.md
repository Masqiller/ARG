---
source_file: "vendor/claude-mem/src/ui/viewer/components/GitHubStarsButton.tsx"
type: "code"
community: "Community None"
degree: 3
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# GitHubStarsButton.tsx

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 3

## Architecture Graph
```mermaid
graph LR
    center["GitHubStarsButton.tsx"]:::centerNode
    center -->|"imports"| N_hooks_usegithubstars_usegithubstars["useGitHubStars[]"]
    center -->|"imports"| N_utils_formatnumber_formatstarcount["formatStarCount[]"]
    center -->|"contains"| N_components_githubstarsbutton_githubstarsbutton["GitHubStarsButton[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[GitHubStarsButton()]] - `contains` [EXTRACTED]
- [[formatStarCount()]] - `imports` [EXTRACTED]
- [[useGitHubStars()]] - `imports` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[GitHubStarsButton.tsx]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None