---
source_file: "vendor/claude-mem/scripts/bug-report/collector.ts"
type: "code"
community: "Community None"
degree: 4
location: "L312"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# formatDiagnostics()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 4

## Architecture Graph
```mermaid
graph LR
    center["formatDiagnostics[]"]:::centerNode
    center -->|"contains"| N_vendor_claude_mem_scripts_bug_report_collector_ts["collector.ts"]
    center -->|"imports"| N_vendor_claude_mem_scripts_bug_report_index_ts["index.ts"]
    center -->|"calls"| N_bug_report_index_generatebugreport["generateBugReport[]"]
    center -->|"calls"| N_bug_report_index_generatetemplatefallback["generateTemplateFallback[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[collector.ts]] - `contains` [EXTRACTED]
- [[generateBugReport()]] - `calls` [INFERRED]
- [[generateTemplateFallback()]] - `calls` [INFERRED]
- [[index.ts_13]] - `imports` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[formatDiagnostics()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None