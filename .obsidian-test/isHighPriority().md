---
source_file: "vendor/claude-mem/tests/logger-usage-standards.test.ts"
type: "code"
community: "Community None"
degree: 3
location: "L75"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# isHighPriority()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 3

## Architecture Graph
```mermaid
graph LR
    center["isHighPriority[]"]:::centerNode
    center -->|"contains"| N_vendor_claude_mem_tests_logger_usage_standards_test_ts["logger-usage-standards.test.ts"]
    center -->|"calls"| N_tests_logger_usage_standards_test_isuifile["isUIFile[]"]
    center -->|"calls"| N_tests_logger_usage_standards_test_analyzefile["analyzeFile[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[analyzeFile()]] - `calls` [EXTRACTED]
- [[isUIFile()]] - `calls` [EXTRACTED]
- [[logger-usage-standards.test.ts]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[isHighPriority()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None