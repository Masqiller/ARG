---
source_file: "vendor/claude-mem/scripts/bug-report/cli.ts"
type: "code"
community: "Community None"
degree: 7
location: "L129"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# main()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 7

## Architecture Graph
```mermaid
graph LR
    center["main[]"]:::centerNode
    center -->|"calls"| N_bug_report_collector_collectdiagnostics["collectDiagnostics[]"]
    center -->|"contains"| N_vendor_claude_mem_scripts_bug_report_cli_ts["cli.ts"]
    center -->|"calls"| N_bug_report_cli_parseargs["parseArgs[]"]
    center -->|"calls"| N_bug_report_cli_printhelp["printHelp[]"]
    center -->|"calls"| N_bug_report_cli_promptuser["promptUser[]"]
    center -->|"calls"| N_bug_report_cli_promptmultiline["promptMultiline[]"]
    center -->|"calls"| N_bug_report_index_generatebugreport["generateBugReport[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[cli.ts_1]] - `contains` [EXTRACTED]
- [[collectDiagnostics()]] - `calls` [INFERRED]
- [[generateBugReport()]] - `calls` [INFERRED]
- [[parseArgs()_2]] - `calls` [EXTRACTED]
- [[printHelp()_2]] - `calls` [EXTRACTED]
- [[promptMultiline()]] - `calls` [EXTRACTED]
- [[promptUser()]] - `calls` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[main()_42]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None