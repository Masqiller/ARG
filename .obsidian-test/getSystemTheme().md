---
source_file: "vendor/claude-mem/src/ui/viewer/hooks/useTheme.ts"
type: "code"
community: "Community None"
degree: 2
location: "L8"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# getSystemTheme()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 2

## Architecture Graph
```mermaid
graph LR
    center["getSystemTheme[]"]:::centerNode
    center -->|"contains"| N_vendor_claude_mem_src_ui_viewer_hooks_usetheme_ts["useTheme.ts"]
    center -->|"calls"| N_hooks_usetheme_resolvetheme["resolveTheme[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[resolveTheme()]] - `calls` [EXTRACTED]
- [[useTheme.ts]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[getSystemTheme()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None