---
source_file: "vendor/claude-mem/src/ui/viewer/hooks/useContextPreview.ts"
type: "code"
community: "Community None"
degree: 4
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# useContextPreview.ts

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 4

## Architecture Graph
```mermaid
graph LR
    center["useContextPreview.ts"]:::centerNode
    center -->|"imports"| N_utils_api_authfetch["authFetch[]"]
    center -->|"contains"| N_hooks_usecontextpreview_getpreferredsource["getPreferredSource[]"]
    center -->|"contains"| N_hooks_usecontextpreview_withdefaultsources["withDefaultSources[]"]
    center -->|"contains"| N_hooks_usecontextpreview_usecontextpreview["useContextPreview[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[authFetch()]] - `imports` [EXTRACTED]
- [[getPreferredSource()]] - `contains` [EXTRACTED]
- [[useContextPreview()]] - `contains` [EXTRACTED]
- [[withDefaultSources()]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[useContextPreview.ts]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None