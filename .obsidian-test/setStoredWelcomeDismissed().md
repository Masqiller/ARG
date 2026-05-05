---
source_file: "vendor/claude-mem/src/ui/viewer/components/WelcomeCard.tsx"
type: "code"
community: "Community None"
degree: 4
location: "L20"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# setStoredWelcomeDismissed()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 4

## Architecture Graph
```mermaid
graph LR
    center["setStoredWelcomeDismissed[]"]:::centerNode
    center -->|"imports"| N_vendor_claude_mem_tests_viewer_welcome_card_storage_test_ts["welcome-card-storage.test.ts"]
    center -->|"imports"| N_vendor_claude_mem_src_ui_viewer_app_tsx["App.tsx"]
    center -->|"contains"| N_vendor_claude_mem_src_ui_viewer_components_welcomecard_tsx["WelcomeCard.tsx"]
    center -->|"calls"| N_components_welcomecard_handledismiss["handleDismiss[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[App.tsx]] - `imports` [EXTRACTED]
- [[WelcomeCard.tsx]] - `contains` [EXTRACTED]
- [[handleDismiss()]] - `calls` [EXTRACTED]
- [[welcome-card-storage.test.ts]] - `imports` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[setStoredWelcomeDismissed()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None