---
source_file: "vendor/claude-mem/tests/shared/timeline-formatting.test.ts"
type: "code"
community: "Community None"
degree: 3
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# timeline-formatting.test.ts

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 3

## Architecture Graph
```mermaid
graph LR
    center["timeline-formatting.test.ts"]:::centerNode
    center -->|"imports_from"| N_vendor_claude_mem_src_shared_timeline_formatting_ts["timeline-formatting.ts"]
    center -->|"imports"| N_shared_timeline_formatting_extractfirstfile["extractFirstFile[]"]
    center -->|"imports"| N_shared_timeline_formatting_groupbydate["groupByDate[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[extractFirstFile()]] - `imports` [EXTRACTED]
- [[groupByDate()]] - `imports` [EXTRACTED]
- [[timeline-formatting.ts]] - `imports_from` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[timeline-formatting.test.ts]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None