---
source_file: "vendor/claude-mem/tests/logger-usage-standards.test.ts"
type: "code"
community: "Community None"
degree: 5
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# logger-usage-standards.test.ts

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 5

## Architecture Graph
```mermaid
graph LR
    center["logger-usage-standards.test.ts"]:::centerNode
    center -->|"contains"| N_tests_logger_usage_standards_test_isuifile["isUIFile[]"]
    center -->|"contains"| N_tests_logger_usage_standards_test_findtypescriptfiles["findTypeScriptFiles[]"]
    center -->|"contains"| N_tests_logger_usage_standards_test_shouldexclude["shouldExclude[]"]
    center -->|"contains"| N_tests_logger_usage_standards_test_ishighpriority["isHighPriority[]"]
    center -->|"contains"| N_tests_logger_usage_standards_test_analyzefile["analyzeFile[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[analyzeFile()]] - `contains` [EXTRACTED]
- [[findTypeScriptFiles()]] - `contains` [EXTRACTED]
- [[isHighPriority()]] - `contains` [EXTRACTED]
- [[isUIFile()]] - `contains` [EXTRACTED]
- [[shouldExclude()]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[logger-usage-standards.test.ts]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None