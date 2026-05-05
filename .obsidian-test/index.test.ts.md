---
source_file: "vendor/claude-mem/tests/supervisor/index.test.ts"
type: "code"
community: "Community None"
degree: 3
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# index.test.ts

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 3

## Architecture Graph
```mermaid
graph LR
    center["index.test.ts"]:::centerNode
    center -->|"imports_from"| N_vendor_claude_mem_src_supervisor_index_ts["index.ts"]
    center -->|"imports"| N_supervisor_index_validateworkerpidfile["validateWorkerPidFile[]"]
    center -->|"contains"| N_supervisor_index_test_maketempdir["makeTempDir[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[index.ts_11]] - `imports_from` [EXTRACTED]
- [[makeTempDir()_2]] - `contains` [EXTRACTED]
- [[validateWorkerPidFile()]] - `imports` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[index.test.ts]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None