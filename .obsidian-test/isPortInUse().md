---
source_file: "vendor/claude-mem/tests/worker-spawn.test.ts"
type: "code"
community: "Community None"
degree: 2
location: "L18"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# isPortInUse()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 2

## Architecture Graph
```mermaid
graph LR
    center["isPortInUse[]"]:::centerNode
    center -->|"contains"| N_vendor_claude_mem_tests_worker_spawn_test_ts["worker-spawn.test.ts"]
    center -->|"calls"| N_tests_worker_spawn_test_waitforhealth["waitForHealth[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[waitForHealth()]] - `calls` [EXTRACTED]
- [[worker-spawn.test.ts]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[isPortInUse()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None