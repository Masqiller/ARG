---
source_file: "vendor/claude-mem/scripts/bug-report/index.ts"
type: "code"
community: "Community None"
degree: 4
location: "L156"
tags:
  - graphify/code
  - graphify/INFERRED
  - community/Community_None
---

# generateTemplateFallback()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 4

## Architecture Graph
```mermaid
graph LR
    center["generateTemplateFallback[]"]:::centerNode
    center -->|"calls"| N_bug_report_collector_collectdiagnostics["collectDiagnostics[]"]
    center -->|"calls"| N_bug_report_collector_formatdiagnostics["formatDiagnostics[]"]
    center -->|"contains"| N_vendor_claude_mem_scripts_bug_report_index_ts["index.ts"]
    center -->|"calls"| N_bug_report_index_generatebugreport["generateBugReport[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[collectDiagnostics()]] - `calls` [INFERRED]
- [[formatDiagnostics()]] - `calls` [INFERRED]
- [[generateBugReport()]] - `calls` [EXTRACTED]
- [[index.ts_13]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[generateTemplateFallback()]]
```

#graphify/code #graphify/INFERRED #community/Community_None