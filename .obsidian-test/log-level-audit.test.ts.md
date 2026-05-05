---
source_file: "vendor/claude-mem/tests/log-level-audit.test.ts"
type: "code"
community: "Community None"
degree: 5
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# log-level-audit.test.ts

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 5

## Architecture Graph
```mermaid
graph LR
    center["log-level-audit.test.ts"]:::centerNode
    center -->|"contains"| N_tests_log_level_audit_test_findtypescriptfiles["findTypeScriptFiles[]"]
    center -->|"contains"| N_tests_log_level_audit_test_extractloggercalls["extractLoggerCalls[]"]
    center -->|"contains"| N_tests_log_level_audit_test_normalizelevel["normalizeLevel[]"]
    center -->|"contains"| N_tests_log_level_audit_test_generatereport["generateReport[]"]
    center -->|"contains"| N_tests_log_level_audit_test_formatmessage["formatMessage[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[extractLoggerCalls()]] - `contains` [EXTRACTED]
- [[findTypeScriptFiles()_1]] - `contains` [EXTRACTED]
- [[formatMessage()]] - `contains` [EXTRACTED]
- [[generateReport()]] - `contains` [EXTRACTED]
- [[normalizeLevel()]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[log-level-audit.test.ts]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None