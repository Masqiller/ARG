---
source_file: "vendor/claude-mem/src/utils/cursor-utils.ts"
type: "code"
community: "Community None"
degree: 5
location: "L63"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# writeContextFile()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 5

## Architecture Graph
```mermaid
graph LR
    center["writeContextFile[]"]:::centerNode
    center -->|"imports"| N_vendor_claude_mem_tests_cursor_context_update_test_ts["cursor-context-update.test.ts"]
    center -->|"imports"| N_vendor_claude_mem_src_services_integrations_cursorhooksinstaller_ts["CursorHooksInstaller.ts"]
    center -->|"calls"| N_integrations_cursorhooksinstaller_updatecursorcontextforproject["updateCursorContextForProject[]"]
    center -->|"calls"| N_integrations_cursorhooksinstaller_fetchinitialcontextfromworker["fetchInitialContextFromWorker[]"]
    center -->|"contains"| N_vendor_claude_mem_src_utils_cursor_utils_ts["cursor-utils.ts"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[CursorHooksInstaller.ts]] - `imports` [EXTRACTED]
- [[cursor-context-update.test.ts]] - `imports` [EXTRACTED]
- [[cursor-utils.ts]] - `contains` [EXTRACTED]
- [[fetchInitialContextFromWorker()]] - `calls` [INFERRED]
- [[updateCursorContextForProject()]] - `calls` [INFERRED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[writeContextFile()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None