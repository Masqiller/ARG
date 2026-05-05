---
source_file: "vendor/claude-mem/scripts/bug-report/index.ts"
type: "code"
community: "Community None"
degree: 7
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# index.ts

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 7

## Architecture Graph
```mermaid
graph LR
    center["index.ts"]:::centerNode
    center -->|"imports_from"| N_vendor_claude_mem_scripts_bug_report_collector_ts["collector.ts"]
    center -->|"imports"| N_bug_report_collector_collectdiagnostics["collectDiagnostics[]"]
    center -->|"imports"| N_bug_report_collector_formatdiagnostics["formatDiagnostics[]"]
    center -->|"imports_from"| N_vendor_claude_mem_scripts_bug_report_cli_ts["cli.ts"]
    center -->|"contains"| N_bug_report_index_generatebugreport["generateBugReport[]"]
    center -->|"contains"| N_bug_report_index_buildprompt["buildPrompt[]"]
    center -->|"contains"| N_bug_report_index_generatetemplatefallback["generateTemplateFallback[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[buildPrompt()]] - `contains` [EXTRACTED]
- [[cli.ts_1]] - `imports_from` [EXTRACTED]
- [[collectDiagnostics()]] - `imports` [EXTRACTED]
- [[collector.ts]] - `imports_from` [EXTRACTED]
- [[formatDiagnostics()]] - `imports` [EXTRACTED]
- [[generateBugReport()]] - `contains` [EXTRACTED]
- [[generateTemplateFallback()]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[index.ts_13]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None