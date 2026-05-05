---
source_file: "vendor/claude-mem/scripts/anti-pattern-test/detect-error-handling-antipatterns.ts"
type: "code"
community: "Community None"
degree: 1
location: "L24"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# findFilesRecursive()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 1

## Architecture Graph
```mermaid
graph LR
    center["findFilesRecursive[]"]:::centerNode
    center -->|"contains"| N_vendor_claude_mem_scripts_anti_pattern_test_detect_error_handling_antipatterns_ts["detect-error-handling-antipatterns.ts"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[detect-error-handling-antipatterns.ts]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[findFilesRecursive()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None