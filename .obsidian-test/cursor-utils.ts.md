---
source_file: "vendor/claude-mem/src/utils/cursor-utils.ts"
type: "code"
community: "Community None"
degree: 16
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# cursor-utils.ts

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 16

## Architecture Graph
```mermaid
graph LR
    center["cursor-utils.ts"]:::centerNode
    center -->|"imports_from"| N_vendor_claude_mem_src_services_integrations_cursorhooksinstaller_ts["CursorHooksInstaller.ts"]
    center -->|"imports_from"| N_vendor_claude_mem_src_utils_logger_ts["logger.ts"]
    center -->|"imports"| N_utils_logger_logger["Logger"]
    center -->|"contains"| N_utils_cursor_utils_readcursorregistry["readCursorRegistry[]"]
    center -->|"contains"| N_utils_cursor_utils_writecursorregistry["writeCursorRegistry[]"]
    center -->|"contains"| N_utils_cursor_utils_registercursorproject["registerCursorProject[]"]
    center -->|"contains"| N_utils_cursor_utils_unregistercursorproject["unregisterCursorProject[]"]
    center -->|"contains"| N_utils_cursor_utils_writecontextfile["writeContextFile[]"]
    center -->|"contains"| N_utils_cursor_utils_readcontextfile["readContextFile[]"]
    center -->|"contains"| N_utils_cursor_utils_configurecursormcp["configureCursorMcp[]"]
    center -->|"contains"| N_utils_cursor_utils_removemcpconfig["removeMcpConfig[]"]
    center -->|"contains"| N_utils_cursor_utils_parsearrayfield["parseArrayField[]"]
    center -->|"contains"| N_utils_cursor_utils_jsonget["jsonGet[]"]
    center -->|"contains"| N_utils_cursor_utils_getprojectname["getProjectName[]"]
    center -->|"contains"| N_utils_cursor_utils_isempty["isEmpty[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[CursorHooksInstaller.ts]] - `imports_from` [EXTRACTED]
- [[Logger]] - `imports` [EXTRACTED]
- [[configureCursorMcp()_1]] - `contains` [EXTRACTED]
- [[getProjectName()_1]] - `contains` [EXTRACTED]
- [[isEmpty()]] - `contains` [EXTRACTED]
- [[jsonGet()]] - `contains` [EXTRACTED]
- [[logger.ts]] - `imports_from` [EXTRACTED]
- [[parseArrayField()]] - `contains` [EXTRACTED]
- [[readContextFile()]] - `contains` [EXTRACTED]
- [[readCursorRegistry()_1]] - `contains` [EXTRACTED]
- [[registerCursorProject()_1]] - `contains` [EXTRACTED]
- [[removeMcpConfig()]] - `contains` [EXTRACTED]
- [[unregisterCursorProject()_1]] - `contains` [EXTRACTED]
- [[urlEncode()]] - `contains` [EXTRACTED]
- [[writeContextFile()]] - `contains` [EXTRACTED]
- [[writeCursorRegistry()_1]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[cursor-utils.ts]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None