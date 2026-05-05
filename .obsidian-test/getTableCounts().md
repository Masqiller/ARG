---
source_file: "vendor/claude-mem/scripts/bug-report/collector.ts"
type: "code"
community: "Community None"
degree: 2
location: "L176"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# getTableCounts()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 2

## Architecture Graph
```mermaid
graph LR
    center["getTableCounts[]"]:::centerNode
    center -->|"contains"| N_vendor_claude_mem_scripts_bug_report_collector_ts["collector.ts"]
    center -->|"calls"| N_bug_report_collector_collectdiagnostics["collectDiagnostics[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[collectDiagnostics()]] - `calls` [EXTRACTED]
- [[collector.ts]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[getTableCounts()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None