---
source_file: "vendor/claude-mem/src/ui/viewer/components/WelcomeCard.tsx"
type: "code"
community: "Community None"
degree: 6
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# WelcomeCard.tsx

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 6

## Architecture Graph
```mermaid
graph LR
    center["WelcomeCard.tsx"]:::centerNode
    center -->|"contains"| N_components_welcomecard_getstoredwelcomedismissed["getStoredWelcomeDismissed[]"]
    center -->|"contains"| N_components_welcomecard_setstoredwelcomedismissed["setStoredWelcomeDismissed[]"]
    center -->|"contains"| N_components_welcomecard_dismissbutton["DismissButton[]"]
    center -->|"contains"| N_components_welcomecard_streamillustration["StreamIllustration[]"]
    center -->|"contains"| N_components_welcomecard_handledismiss["handleDismiss[]"]
    center -->|"contains"| N_components_welcomecard_handleesc["handleEsc[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[DismissButton()]] - `contains` [EXTRACTED]
- [[StreamIllustration()]] - `contains` [EXTRACTED]
- [[getStoredWelcomeDismissed()]] - `contains` [EXTRACTED]
- [[handleDismiss()]] - `contains` [EXTRACTED]
- [[handleEsc()]] - `contains` [EXTRACTED]
- [[setStoredWelcomeDismissed()]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[WelcomeCard.tsx]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None