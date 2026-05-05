---
source_file: "vendor/claude-mem/scripts/bug-report/collector.ts"
type: "code"
community: "Community None"
degree: 16
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# collector.ts

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 16

## Architecture Graph
```mermaid
graph LR
    center["collector.ts"]:::centerNode
    center -->|"contains"| N_bug_report_collector_sanitizepath["sanitizePath[]"]
    center -->|"contains"| N_bug_report_collector_getclaudememversion["getClaudememVersion[]"]
    center -->|"contains"| N_bug_report_collector_getclaudecodeversion["getClaudeCodeVersion[]"]
    center -->|"contains"| N_bug_report_collector_getbunversion["getBunVersion[]"]
    center -->|"contains"| N_bug_report_collector_getosversion["getOsVersion[]"]
    center -->|"contains"| N_bug_report_collector_checkworkerhealth["checkWorkerHealth[]"]
    center -->|"contains"| N_bug_report_collector_getworkerstats["getWorkerStats[]"]
    center -->|"contains"| N_bug_report_collector_readpidfile["readPidFile[]"]
    center -->|"contains"| N_bug_report_collector_readloglines["readLogLines[]"]
    center -->|"contains"| N_bug_report_collector_getsettings["getSettings[]"]
    center -->|"contains"| N_bug_report_collector_getdatabaseinfo["getDatabaseInfo[]"]
    center -->|"contains"| N_bug_report_collector_gettablecounts["getTableCounts[]"]
    center -->|"contains"| N_bug_report_collector_collectdiagnostics["collectDiagnostics[]"]
    center -->|"contains"| N_bug_report_collector_formatdiagnostics["formatDiagnostics[]"]
    center -->|"imports_from"| N_vendor_claude_mem_scripts_bug_report_cli_ts["cli.ts"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[checkWorkerHealth()_1]] - `contains` [EXTRACTED]
- [[cli.ts_1]] - `imports_from` [EXTRACTED]
- [[collectDiagnostics()]] - `contains` [EXTRACTED]
- [[formatDiagnostics()]] - `contains` [EXTRACTED]
- [[getBunVersion()_1]] - `contains` [EXTRACTED]
- [[getClaudeCodeVersion()]] - `contains` [EXTRACTED]
- [[getClaudememVersion()]] - `contains` [EXTRACTED]
- [[getDatabaseInfo()]] - `contains` [EXTRACTED]
- [[getOsVersion()]] - `contains` [EXTRACTED]
- [[getSettings()]] - `contains` [EXTRACTED]
- [[getTableCounts()]] - `contains` [EXTRACTED]
- [[getWorkerStats()]] - `contains` [EXTRACTED]
- [[index.ts_13]] - `imports_from` [EXTRACTED]
- [[readLogLines()]] - `contains` [EXTRACTED]
- [[readPidFile()_1]] - `contains` [EXTRACTED]
- [[sanitizePath()]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[collector.ts]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None