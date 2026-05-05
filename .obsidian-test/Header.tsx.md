---
source_file: "vendor/claude-mem/src/ui/viewer/components/Header.tsx"
type: "code"
community: "Community None"
degree: 3
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# Header.tsx

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 3

## Architecture Graph
```mermaid
graph LR
    center["Header.tsx"]:::centerNode
    center -->|"imports"| N_components_themetoggle_themetoggle["ThemeToggle[]"]
    center -->|"imports"| N_components_githubstarsbutton_githubstarsbutton["GitHubStarsButton[]"]
    center -->|"imports"| N_hooks_usespinningfavicon_usespinningfavicon["useSpinningFavicon[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[GitHubStarsButton()]] - `imports` [EXTRACTED]
- [[ThemeToggle()]] - `imports` [EXTRACTED]
- [[useSpinningFavicon()]] - `imports` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[Header.tsx]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None