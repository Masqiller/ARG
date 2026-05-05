---
source_file: "vendor/claude-mem/tests/viewer/welcome-card-storage.test.ts"
type: "code"
community: "Community None"
degree: 3
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# welcome-card-storage.test.ts

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 3

## Architecture Graph
```mermaid
graph LR
    center["welcome-card-storage.test.ts"]:::centerNode
    center -->|"contains"| N_viewer_welcome_card_storage_test_memorystorage["MemoryStorage"]
    center -->|"imports"| N_components_welcomecard_getstoredwelcomedismissed["getStoredWelcomeDismissed[]"]
    center -->|"imports"| N_components_welcomecard_setstoredwelcomedismissed["setStoredWelcomeDismissed[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[MemoryStorage]] - `contains` [EXTRACTED]
- [[getStoredWelcomeDismissed()]] - `imports` [EXTRACTED]
- [[setStoredWelcomeDismissed()]] - `imports` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[welcome-card-storage.test.ts]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None