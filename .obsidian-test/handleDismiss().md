---
source_file: "vendor/claude-mem/src/ui/viewer/components/WelcomeCard.tsx"
type: "code"
community: "Community None"
degree: 3
location: "L163"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# handleDismiss()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 3

## Architecture Graph
```mermaid
graph LR
    center["handleDismiss[]"]:::centerNode
    center -->|"contains"| N_vendor_claude_mem_src_ui_viewer_components_welcomecard_tsx["WelcomeCard.tsx"]
    center -->|"calls"| N_components_welcomecard_setstoredwelcomedismissed["setStoredWelcomeDismissed[]"]
    center -->|"calls"| N_components_welcomecard_handleesc["handleEsc[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[WelcomeCard.tsx]] - `contains` [EXTRACTED]
- [[handleEsc()]] - `calls` [EXTRACTED]
- [[setStoredWelcomeDismissed()]] - `calls` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[handleDismiss()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None