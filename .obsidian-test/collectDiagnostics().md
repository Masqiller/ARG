---
source_file: "vendor/claude-mem/scripts/bug-report/collector.ts"
type: "code"
community: "Community None"
degree: 18
location: "L204"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# collectDiagnostics()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 18

## Architecture Graph
```mermaid
graph LR
    center["collectDiagnostics[]"]:::centerNode
    center -->|"contains"| N_vendor_claude_mem_scripts_bug_report_collector_ts["collector.ts"]
    center -->|"calls"| N_bug_report_collector_sanitizepath["sanitizePath[]"]
    center -->|"calls"| N_bug_report_collector_getclaudememversion["getClaudememVersion[]"]
    center -->|"calls"| N_bug_report_collector_getclaudecodeversion["getClaudeCodeVersion[]"]
    center -->|"calls"| N_bug_report_collector_getbunversion["getBunVersion[]"]
    center -->|"calls"| N_bug_report_collector_getosversion["getOsVersion[]"]
    center -->|"calls"| N_bug_report_collector_checkworkerhealth["checkWorkerHealth[]"]
    center -->|"calls"| N_bug_report_collector_getworkerstats["getWorkerStats[]"]
    center -->|"calls"| N_bug_report_collector_readpidfile["readPidFile[]"]
    center -->|"calls"| N_bug_report_collector_readloglines["readLogLines[]"]
    center -->|"calls"| N_bug_report_collector_getsettings["getSettings[]"]
    center -->|"calls"| N_bug_report_collector_getdatabaseinfo["getDatabaseInfo[]"]
    center -->|"calls"| N_bug_report_collector_gettablecounts["getTableCounts[]"]
    center -->|"imports"| N_vendor_claude_mem_scripts_bug_report_cli_ts["cli.ts"]
    center -->|"imports"| N_vendor_claude_mem_scripts_bug_report_index_ts["index.ts"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[checkWorkerHealth()_1]] - `calls` [EXTRACTED]
- [[cli.ts_1]] - `imports` [EXTRACTED]
- [[collector.ts]] - `contains` [EXTRACTED]
- [[generateBugReport()]] - `calls` [INFERRED]
- [[generateTemplateFallback()]] - `calls` [INFERRED]
- [[getBunVersion()_1]] - `calls` [EXTRACTED]
- [[getClaudeCodeVersion()]] - `calls` [EXTRACTED]
- [[getClaudememVersion()]] - `calls` [EXTRACTED]
- [[getDatabaseInfo()]] - `calls` [EXTRACTED]
- [[getOsVersion()]] - `calls` [EXTRACTED]
- [[getSettings()]] - `calls` [EXTRACTED]
- [[getTableCounts()]] - `calls` [EXTRACTED]
- [[getWorkerStats()]] - `calls` [EXTRACTED]
- [[index.ts_13]] - `imports` [EXTRACTED]
- [[main()_42]] - `calls` [INFERRED]
- [[readLogLines()]] - `calls` [EXTRACTED]
- [[readPidFile()_1]] - `calls` [EXTRACTED]
- [[sanitizePath()]] - `calls` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[collectDiagnostics()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None