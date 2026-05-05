---
source_file: "vendor/claude-mem/src/ui/viewer/components/LogsModal.tsx"
type: "code"
community: "Community None"
degree: 2
location: "L70"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# LogsDrawer()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 2

## Architecture Graph
```mermaid
graph LR
    center["LogsDrawer[]"]:::centerNode
    center -->|"imports"| N_vendor_claude_mem_src_ui_viewer_app_tsx["App.tsx"]
    center -->|"contains"| N_vendor_claude_mem_src_ui_viewer_components_logsmodal_tsx["LogsModal.tsx"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[App.tsx]] - `imports` [EXTRACTED]
- [[LogsModal.tsx]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[LogsDrawer()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None