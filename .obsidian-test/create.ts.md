---
source_file: "vendor/claude-mem/src/services/sqlite/sessions/create.ts"
type: "code"
community: "Community None"
degree: 7
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# create.ts

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 7

## Architecture Graph
```mermaid
graph LR
    center["create.ts"]:::centerNode
    center -->|"imports_from"| N_vendor_claude_mem_src_shared_platform_source_ts["platform-source.ts"]
    center -->|"imports"| N_shared_platform_source_normalizeplatformsource["normalizePlatformSource[]"]
    center -->|"imports_from"| N_vendor_claude_mem_src_utils_logger_ts["logger.ts"]
    center -->|"imports"| N_utils_logger_logger["Logger"]
    center -->|"contains"| N_sessions_create_resolvecreatesessionargs["resolveCreateSessionArgs[]"]
    center -->|"contains"| N_sessions_create_createsdksession["createSDKSession[]"]
    center -->|"contains"| N_sessions_create_updatememorysessionid["updateMemorySessionId[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[Logger]] - `imports` [EXTRACTED]
- [[createSDKSession()]] - `contains` [EXTRACTED]
- [[logger.ts]] - `imports_from` [EXTRACTED]
- [[normalizePlatformSource()]] - `imports` [EXTRACTED]
- [[platform-source.ts]] - `imports_from` [EXTRACTED]
- [[resolveCreateSessionArgs()_1]] - `contains` [EXTRACTED]
- [[updateMemorySessionId()]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[create.ts]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None