---
source_file: "vendor/claude-mem/src/supervisor/process-registry.ts"
type: "code"
community: "Community None"
degree: 3
location: "L352"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# createProcessRegistry()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 3

## Architecture Graph
```mermaid
graph LR
    center["createProcessRegistry[]"]:::centerNode
    center -->|"imports"| N_vendor_claude_mem_tests_supervisor_process_registry_test_ts["process-registry.test.ts"]
    center -->|"imports"| N_vendor_claude_mem_tests_supervisor_shutdown_test_ts["shutdown.test.ts"]
    center -->|"contains"| N_vendor_claude_mem_src_supervisor_process_registry_ts["process-registry.ts"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[process-registry.test.ts]] - `imports` [EXTRACTED]
- [[process-registry.ts]] - `contains` [EXTRACTED]
- [[shutdown.test.ts]] - `imports` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[createProcessRegistry()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None