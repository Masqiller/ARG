---
source_file: "scripts/test_session_manager.ts"
type: "code"
community: "Community None"
degree: 2
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# test_session_manager.ts

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 2

## Architecture Graph
```mermaid
graph LR
    center["test_session_manager.ts"]:::centerNode
    center -->|"imports"| N_src_arg_session_manager_argsessionmanager["ARGSessionManager"]
    center -->|"contains"| N_scripts_test_session_manager_testsessionmanager["testSessionManager[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[ARGSessionManager]] - `imports` [EXTRACTED]
- [[testSessionManager()]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[test_session_manager.ts]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None