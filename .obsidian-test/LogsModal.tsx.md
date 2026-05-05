---
source_file: "vendor/claude-mem/src/ui/viewer/components/LogsModal.tsx"
type: "code"
community: "Community None"
degree: 3
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# LogsModal.tsx

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 3

## Architecture Graph
```mermaid
graph LR
    center["LogsModal.tsx"]:::centerNode
    center -->|"imports"| N_utils_api_authfetch["authFetch[]"]
    center -->|"contains"| N_components_logsmodal_parselogline["parseLogLine[]"]
    center -->|"contains"| N_components_logsmodal_logsdrawer["LogsDrawer[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[LogsDrawer()]] - `contains` [EXTRACTED]
- [[authFetch()]] - `imports` [EXTRACTED]
- [[parseLogLine()]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[LogsModal.tsx]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None