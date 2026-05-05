---
source_file: "vendor/claude-mem/tests/supervisor/shutdown.test.ts"
type: "code"
community: "Community None"
degree: 1
location: "L8"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# makeTempDir()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 1

## Architecture Graph
```mermaid
graph LR
    center["makeTempDir[]"]:::centerNode
    center -->|"contains"| N_vendor_claude_mem_tests_supervisor_shutdown_test_ts["shutdown.test.ts"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[shutdown.test.ts]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[makeTempDir()_1]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None