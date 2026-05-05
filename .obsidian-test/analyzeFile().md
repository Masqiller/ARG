---
source_file: "vendor/claude-mem/tests/logger-usage-standards.test.ts"
type: "code"
community: "Community None"
degree: 2
location: "L85"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# analyzeFile()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 2

## Architecture Graph
```mermaid
graph LR
    center["analyzeFile[]"]:::centerNode
    center -->|"contains"| N_vendor_claude_mem_tests_logger_usage_standards_test_ts["logger-usage-standards.test.ts"]
    center -->|"calls"| N_tests_logger_usage_standards_test_ishighpriority["isHighPriority[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[isHighPriority()]] - `calls` [EXTRACTED]
- [[logger-usage-standards.test.ts]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[analyzeFile()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None