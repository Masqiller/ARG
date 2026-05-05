---
source_file: "vendor/claude-mem/scripts/anti-pattern-test/detect-error-handling-antipatterns.ts"
type: "code"
community: "Community None"
degree: 4
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# detect-error-handling-antipatterns.ts

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 4

## Architecture Graph
```mermaid
graph LR
    center["detect-error-handling-antipatterns.ts"]:::centerNode
    center -->|"contains"| N_anti_pattern_test_detect_error_handling_antipatterns_findfilesrecursive["findFilesRecursive[]"]
    center -->|"contains"| N_anti_pattern_test_detect_error_handling_antipatterns_detectantipatterns["detectAntiPatterns[]"]
    center -->|"contains"| N_anti_pattern_test_detect_error_handling_antipatterns_analyzetrycatchblock["analyzeTryCatchBlock[]"]
    center -->|"contains"| N_anti_pattern_test_detect_error_handling_antipatterns_formatreport["formatReport[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[analyzeTryCatchBlock()]] - `contains` [EXTRACTED]
- [[detectAntiPatterns()]] - `contains` [EXTRACTED]
- [[findFilesRecursive()]] - `contains` [EXTRACTED]
- [[formatReport()]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[detect-error-handling-antipatterns.ts]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None