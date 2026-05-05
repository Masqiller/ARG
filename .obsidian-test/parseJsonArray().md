---
source_file: "vendor/claude-mem/src/shared/timeline-formatting.ts"
type: "code"
community: "Community None"
degree: 5
location: "L5"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# parseJsonArray()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 5

## Architecture Graph
```mermaid
graph LR
    center["parseJsonArray[]"]:::centerNode
    center -->|"imports"| N_vendor_claude_mem_src_cli_handlers_file_context_ts["file-context.ts"]
    center -->|"contains"| N_vendor_claude_mem_src_shared_timeline_formatting_ts["timeline-formatting.ts"]
    center -->|"calls"| N_shared_timeline_formatting_extractfirstfile["extractFirstFile[]"]
    center -->|"imports"| N_vendor_claude_mem_src_services_context_sections_timelinerenderer_ts["TimelineRenderer.ts"]
    center -->|"calls"| N_sections_timelinerenderer_getdetailfield["getDetailField[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[TimelineRenderer.ts]] - `imports` [EXTRACTED]
- [[extractFirstFile()]] - `calls` [EXTRACTED]
- [[file-context.ts]] - `imports` [EXTRACTED]
- [[getDetailField()]] - `calls` [INFERRED]
- [[timeline-formatting.ts]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[parseJsonArray()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None