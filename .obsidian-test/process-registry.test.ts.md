---
source_file: "vendor/claude-mem/tests/supervisor/process-registry.test.ts"
type: "code"
community: "Community None"
degree: 4
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# process-registry.test.ts

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 4

## Architecture Graph
```mermaid
graph LR
    center["process-registry.test.ts"]:::centerNode
    center -->|"imports_from"| N_vendor_claude_mem_src_supervisor_process_registry_ts["process-registry.ts"]
    center -->|"imports"| N_supervisor_process_registry_createprocessregistry["createProcessRegistry[]"]
    center -->|"imports"| N_supervisor_process_registry_ispidalive["isPidAlive[]"]
    center -->|"contains"| N_supervisor_process_registry_test_maketempdir["makeTempDir[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[createProcessRegistry()]] - `imports` [EXTRACTED]
- [[isPidAlive()]] - `imports` [EXTRACTED]
- [[makeTempDir()]] - `contains` [EXTRACTED]
- [[process-registry.ts]] - `imports_from` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[process-registry.test.ts]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None