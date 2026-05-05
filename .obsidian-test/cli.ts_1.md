---
source_file: "vendor/claude-mem/scripts/bug-report/cli.ts"
type: "code"
community: "Community None"
degree: 9
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# cli.ts

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 9

## Architecture Graph
```mermaid
graph LR
    center["cli.ts"]:::centerNode
    center -->|"imports_from"| N_vendor_claude_mem_scripts_bug_report_collector_ts["collector.ts"]
    center -->|"imports"| N_bug_report_collector_collectdiagnostics["collectDiagnostics[]"]
    center -->|"imports_from"| N_vendor_claude_mem_scripts_bug_report_index_ts["index.ts"]
    center -->|"imports"| N_bug_report_index_generatebugreport["generateBugReport[]"]
    center -->|"contains"| N_bug_report_cli_parseargs["parseArgs[]"]
    center -->|"contains"| N_bug_report_cli_printhelp["printHelp[]"]
    center -->|"contains"| N_bug_report_cli_promptuser["promptUser[]"]
    center -->|"contains"| N_bug_report_cli_promptmultiline["promptMultiline[]"]
    center -->|"contains"| N_bug_report_cli_main["main[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[collectDiagnostics()]] - `imports` [EXTRACTED]
- [[collector.ts]] - `imports_from` [EXTRACTED]
- [[generateBugReport()]] - `imports` [EXTRACTED]
- [[index.ts_13]] - `imports_from` [EXTRACTED]
- [[main()_42]] - `contains` [EXTRACTED]
- [[parseArgs()_2]] - `contains` [EXTRACTED]
- [[printHelp()_2]] - `contains` [EXTRACTED]
- [[promptMultiline()]] - `contains` [EXTRACTED]
- [[promptUser()]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[cli.ts_1]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None