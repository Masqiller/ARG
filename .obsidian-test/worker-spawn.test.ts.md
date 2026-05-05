---
source_file: "vendor/claude-mem/tests/worker-spawn.test.ts"
type: "code"
community: "Community None"
degree: 3
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# worker-spawn.test.ts

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 3

## Architecture Graph
```mermaid
graph LR
    center["worker-spawn.test.ts"]:::centerNode
    center -->|"contains"| N_tests_worker_spawn_test_isportinuse["isPortInUse[]"]
    center -->|"contains"| N_tests_worker_spawn_test_waitforhealth["waitForHealth[]"]
    center -->|"contains"| N_tests_worker_spawn_test_runworkercommand["runWorkerCommand[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[isPortInUse()]] - `contains` [EXTRACTED]
- [[runWorkerCommand()]] - `contains` [EXTRACTED]
- [[waitForHealth()]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[worker-spawn.test.ts]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None