---
source_file: "vendor/claude-mem/src/ui/viewer/components/ContextSettingsModal.tsx"
type: "code"
community: "Community None"
degree: 2
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# ContextSettingsModal.tsx

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 2

## Architecture Graph
```mermaid
graph LR
    center["ContextSettingsModal.tsx"]:::centerNode
    center -->|"imports"| N_hooks_usecontextpreview_usecontextpreview["useContextPreview[]"]
    center -->|"contains"| N_components_contextsettingsmodal_handleesc["handleEsc[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[handleEsc()_1]] - `contains` [EXTRACTED]
- [[useContextPreview()]] - `imports` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[ContextSettingsModal.tsx]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None