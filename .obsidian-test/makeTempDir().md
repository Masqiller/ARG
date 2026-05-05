---
source_file: "vendor/claude-mem/tests/supervisor/process-registry.test.ts"
type: "code"
community: "Community None"
degree: 1
location: "L7"
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
    center -->|"contains"| N_vendor_claude_mem_tests_supervisor_process_registry_test_ts["process-registry.test.ts"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[process-registry.test.ts]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[makeTempDir()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None