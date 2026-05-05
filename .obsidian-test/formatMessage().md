---
source_file: "vendor/claude-mem/tests/log-level-audit.test.ts"
type: "code"
community: "Community None"
degree: 2
location: "L216"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# formatMessage()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 2

## Architecture Graph
```mermaid
graph LR
    center["formatMessage[]"]:::centerNode
    center -->|"contains"| N_vendor_claude_mem_tests_log_level_audit_test_ts["log-level-audit.test.ts"]
    center -->|"calls"| N_tests_log_level_audit_test_generatereport["generateReport[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[generateReport()]] - `calls` [EXTRACTED]
- [[log-level-audit.test.ts]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[formatMessage()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None