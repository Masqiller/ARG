---
source_file: "vendor/claude-mem/tests/infrastructure/wmic-parsing.test.ts"
type: "code"
community: "Community None"
degree: 2
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# wmic-parsing.test.ts

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 2

## Architecture Graph
```mermaid
graph LR
    center["wmic-parsing.test.ts"]:::centerNode
    center -->|"contains"| N_infrastructure_wmic_parsing_test_parsepowershelloutput["parsePowerShellOutput[]"]
    center -->|"contains"| N_infrastructure_wmic_parsing_test_isvalidparentpid["isValidParentPid[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[isValidParentPid()]] - `contains` [EXTRACTED]
- [[parsePowerShellOutput()]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[wmic-parsing.test.ts]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None