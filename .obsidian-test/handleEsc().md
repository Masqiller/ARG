---
source_file: "vendor/claude-mem/src/ui/viewer/components/WelcomeCard.tsx"
type: "code"
community: "Community None"
degree: 2
location: "L169"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# handleEsc()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 2

## Architecture Graph
```mermaid
graph LR
    center["handleEsc[]"]:::centerNode
    center -->|"contains"| N_vendor_claude_mem_src_ui_viewer_components_welcomecard_tsx["WelcomeCard.tsx"]
    center -->|"calls"| N_components_welcomecard_handledismiss["handleDismiss[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[WelcomeCard.tsx]] - `contains` [EXTRACTED]
- [[handleDismiss()]] - `calls` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[handleEsc()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None