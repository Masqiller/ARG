---
source_file: "vendor/claude-mem/src/utils/cursor-utils.ts"
type: "code"
community: "Community None"
degree: 5
location: "L23"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# readCursorRegistry()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 5

## Architecture Graph
```mermaid
graph LR
    center["readCursorRegistry[]"]:::centerNode
    center -->|"imports"| N_vendor_claude_mem_tests_cursor_registry_test_ts["cursor-registry.test.ts"]
    center -->|"imports"| N_vendor_claude_mem_src_services_integrations_cursorhooksinstaller_ts["CursorHooksInstaller.ts"]
    center -->|"contains"| N_vendor_claude_mem_src_utils_cursor_utils_ts["cursor-utils.ts"]
    center -->|"calls"| N_utils_cursor_utils_registercursorproject["registerCursorProject[]"]
    center -->|"calls"| N_utils_cursor_utils_unregistercursorproject["unregisterCursorProject[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[CursorHooksInstaller.ts]] - `imports` [EXTRACTED]
- [[cursor-registry.test.ts]] - `imports` [EXTRACTED]
- [[cursor-utils.ts]] - `contains` [EXTRACTED]
- [[registerCursorProject()_1]] - `calls` [EXTRACTED]
- [[unregisterCursorProject()_1]] - `calls` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[readCursorRegistry()_1]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None