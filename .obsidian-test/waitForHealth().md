---
source_file: "vendor/claude-mem/tests/worker-spawn.test.ts"
type: "code"
community: "Community None"
degree: 2
location: "L29"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# waitForHealth()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 2

## Architecture Graph
```mermaid
graph LR
    center["waitForHealth[]"]:::centerNode
    center -->|"contains"| N_vendor_claude_mem_tests_worker_spawn_test_ts["worker-spawn.test.ts"]
    center -->|"calls"| N_tests_worker_spawn_test_isportinuse["isPortInUse[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[isPortInUse()]] - `calls` [EXTRACTED]
- [[worker-spawn.test.ts]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[waitForHealth()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None