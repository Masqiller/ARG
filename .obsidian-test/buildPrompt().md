---
source_file: "vendor/claude-mem/scripts/bug-report/index.ts"
type: "code"
community: "Community None"
degree: 2
location: "L108"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# buildPrompt()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 2

## Architecture Graph
```mermaid
graph LR
    center["buildPrompt[]"]:::centerNode
    center -->|"contains"| N_vendor_claude_mem_scripts_bug_report_index_ts["index.ts"]
    center -->|"calls"| N_bug_report_index_generatebugreport["generateBugReport[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[generateBugReport()]] - `calls` [EXTRACTED]
- [[index.ts_13]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[buildPrompt()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None