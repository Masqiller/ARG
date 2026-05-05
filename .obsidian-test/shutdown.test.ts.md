---
source_file: "vendor/claude-mem/tests/supervisor/shutdown.test.ts"
type: "code"
community: "Community None"
degree: 5
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# shutdown.test.ts

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 5

## Architecture Graph
```mermaid
graph LR
    center["shutdown.test.ts"]:::centerNode
    center -->|"imports_from"| N_vendor_claude_mem_src_supervisor_process_registry_ts["process-registry.ts"]
    center -->|"imports"| N_supervisor_process_registry_createprocessregistry["createProcessRegistry[]"]
    center -->|"imports_from"| N_vendor_claude_mem_src_supervisor_shutdown_ts["shutdown.ts"]
    center -->|"imports"| N_supervisor_shutdown_runshutdowncascade["runShutdownCascade[]"]
    center -->|"contains"| N_supervisor_shutdown_test_maketempdir["makeTempDir[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[createProcessRegistry()]] - `imports` [EXTRACTED]
- [[makeTempDir()_1]] - `contains` [EXTRACTED]
- [[process-registry.ts]] - `imports_from` [EXTRACTED]
- [[runShutdownCascade()]] - `imports` [EXTRACTED]
- [[shutdown.ts]] - `imports_from` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[shutdown.test.ts]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None