---
source_file: "vendor/claude-mem/src/ui/viewer/utils/formatters.ts"
type: "code"
community: "Community None"
degree: 4
location: "L2"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# formatDate()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 4

## Architecture Graph
```mermaid
graph LR
    center["formatDate[]"]:::centerNode
    center -->|"imports"| N_vendor_claude_mem_src_ui_viewer_components_observationcard_tsx["ObservationCard.tsx"]
    center -->|"imports"| N_vendor_claude_mem_src_ui_viewer_components_summarycard_tsx["SummaryCard.tsx"]
    center -->|"imports"| N_vendor_claude_mem_src_ui_viewer_components_promptcard_tsx["PromptCard.tsx"]
    center -->|"contains"| N_vendor_claude_mem_src_ui_viewer_utils_formatters_ts["formatters.ts"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[ObservationCard.tsx]] - `imports` [EXTRACTED]
- [[PromptCard.tsx]] - `imports` [EXTRACTED]
- [[SummaryCard.tsx]] - `imports` [EXTRACTED]
- [[formatters.ts]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[formatDate()_2]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None