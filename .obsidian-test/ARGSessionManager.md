---
source_file: "src/arg-session-manager.ts"
type: "code"
community: "Community None"
degree: 9
location: "L10"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# ARGSessionManager

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 9

## Architecture Graph
```mermaid
graph LR
    center["ARGSessionManager"]:::centerNode
    center -->|"contains"| N_src_arg_session_manager_ts["arg-session-manager.ts"]
    center -->|"method"| N_src_arg_session_manager_argsessionmanager_constructor[".constructor[]"]
    center -->|"method"| N_src_arg_session_manager_argsessionmanager_initsession[".initSession[]"]
    center -->|"method"| N_src_arg_session_manager_argsessionmanager_getactivesessionid[".getActiveSessionId[]"]
    center -->|"method"| N_src_arg_session_manager_argsessionmanager_savememory[".saveMemory[]"]
    center -->|"method"| N_src_arg_session_manager_argsessionmanager_getallmemory[".getAllMemory[]"]
    center -->|"method"| N_src_arg_session_manager_argsessionmanager_savesession[".saveSession[]"]
    center -->|"imports"| N_src_mcp_server_ts["mcp-server.ts"]
    center -->|"imports"| N_scripts_test_session_manager_ts["test_session_manager.ts"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[.constructor()_48]] - `method` [EXTRACTED]
- [[.getActiveSessionId()]] - `method` [EXTRACTED]
- [[.getAllMemory()]] - `method` [EXTRACTED]
- [[.initSession()]] - `method` [EXTRACTED]
- [[.saveMemory()]] - `method` [EXTRACTED]
- [[.saveSession()]] - `method` [EXTRACTED]
- [[arg-session-manager.ts]] - `contains` [EXTRACTED]
- [[mcp-server.ts_1]] - `imports` [EXTRACTED]
- [[test_session_manager.ts]] - `imports` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[ARGSessionManager]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None