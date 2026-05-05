---
source_file: "vendor/claude-mem/src/ui/viewer/components/Feed.tsx"
type: "code"
community: "Community None"
degree: 2
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# Feed.tsx

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 2

## Architecture Graph
```mermaid
graph LR
    center["Feed.tsx"]:::centerNode
    center -->|"imports"| N_components_promptcard_promptcard["PromptCard[]"]
    center -->|"imports"| N_components_scrolltotop_scrolltotop["ScrollToTop[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[PromptCard()]] - `imports` [EXTRACTED]
- [[ScrollToTop()]] - `imports` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[Feed.tsx]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None