---
source_file: "vendor/claude-mem/src/ui/viewer/utils/api.ts"
type: "code"
community: "Community None"
degree: 6
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# authFetch()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 6

## Architecture Graph
```mermaid
graph LR
    center["authFetch[]"]:::centerNode
    center -->|"imports"| N_vendor_claude_mem_src_ui_viewer_components_logsmodal_tsx["LogsModal.tsx"]
    center -->|"contains"| N_vendor_claude_mem_src_ui_viewer_utils_api_ts["api.ts"]
    center -->|"imports"| N_vendor_claude_mem_src_ui_viewer_hooks_usesettings_ts["useSettings.ts"]
    center -->|"imports"| N_vendor_claude_mem_src_ui_viewer_hooks_usestats_ts["useStats.ts"]
    center -->|"imports"| N_vendor_claude_mem_src_ui_viewer_hooks_usecontextpreview_ts["useContextPreview.ts"]
    center -->|"imports"| N_vendor_claude_mem_src_ui_viewer_hooks_usepagination_ts["usePagination.ts"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[LogsModal.tsx]] - `imports` [EXTRACTED]
- [[api.ts_1]] - `contains` [EXTRACTED]
- [[useContextPreview.ts]] - `imports` [EXTRACTED]
- [[usePagination.ts]] - `imports` [EXTRACTED]
- [[useSettings.ts]] - `imports` [EXTRACTED]
- [[useStats.ts]] - `imports` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[authFetch()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None