---
source_file: "vendor/claude-mem/src/ui/viewer/App.tsx"
type: "code"
community: "Community None"
degree: 10
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# App.tsx

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 10

## Architecture Graph
```mermaid
graph LR
    center["App.tsx"]:::centerNode
    center -->|"imports"| N_components_logsmodal_logsdrawer["LogsDrawer[]"]
    center -->|"imports"| N_components_welcomecard_getstoredwelcomedismissed["getStoredWelcomeDismissed[]"]
    center -->|"imports"| N_components_welcomecard_setstoredwelcomedismissed["setStoredWelcomeDismissed[]"]
    center -->|"imports"| N_hooks_usesse_usesse["useSSE[]"]
    center -->|"imports"| N_hooks_usesettings_usesettings["useSettings[]"]
    center -->|"imports"| N_hooks_usestats_usestats["useStats[]"]
    center -->|"imports"| N_hooks_usepagination_usepagination["usePagination[]"]
    center -->|"imports"| N_hooks_usetheme_usetheme["useTheme[]"]
    center -->|"imports"| N_utils_data_mergeanddeduplicatebyproject["mergeAndDeduplicateByProject[]"]
    center -->|"contains"| N_viewer_app_app["App[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[App()]] - `contains` [EXTRACTED]
- [[LogsDrawer()]] - `imports` [EXTRACTED]
- [[getStoredWelcomeDismissed()]] - `imports` [EXTRACTED]
- [[mergeAndDeduplicateByProject()]] - `imports` [EXTRACTED]
- [[setStoredWelcomeDismissed()]] - `imports` [EXTRACTED]
- [[usePagination()]] - `imports` [EXTRACTED]
- [[useSSE()]] - `imports` [EXTRACTED]
- [[useSettings()]] - `imports` [EXTRACTED]
- [[useStats()]] - `imports` [EXTRACTED]
- [[useTheme()]] - `imports` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[App.tsx]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None