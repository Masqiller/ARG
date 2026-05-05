---
source_file: "vendor/claude-mem/src/ui/viewer/hooks/useTheme.ts"
type: "code"
community: "Community None"
degree: 4
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# useTheme.ts

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 4

## Architecture Graph
```mermaid
graph LR
    center["useTheme.ts"]:::centerNode
    center -->|"contains"| N_hooks_usetheme_getsystemtheme["getSystemTheme[]"]
    center -->|"contains"| N_hooks_usetheme_getstoredpreference["getStoredPreference[]"]
    center -->|"contains"| N_hooks_usetheme_resolvetheme["resolveTheme[]"]
    center -->|"contains"| N_hooks_usetheme_usetheme["useTheme[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[getStoredPreference()]] - `contains` [EXTRACTED]
- [[getSystemTheme()]] - `contains` [EXTRACTED]
- [[resolveTheme()]] - `contains` [EXTRACTED]
- [[useTheme()]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[useTheme.ts]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None