---
source_file: "vendor/claude-mem/src/supervisor/process-registry.ts"
type: "code"
community: "Community None"
degree: 10
location: "L363"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# getSdkProcessForSession()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 10

## Architecture Graph
```mermaid
graph LR
    center["getSdkProcessForSession[]"]:::centerNode
    center -->|"imports"| N_vendor_claude_mem_src_services_worker_sessionmanager_ts["SessionManager.ts"]
    center -->|"calls"| N_worker_sessionmanager_sessionmanager_deletesession[".deleteSession[]"]
    center -->|"imports"| N_vendor_claude_mem_src_services_worker_claudeprovider_ts["ClaudeProvider.ts"]
    center -->|"calls"| N_worker_claudeprovider_claudeprovider_startsession[".startSession[]"]
    center -->|"imports"| N_vendor_claude_mem_src_services_worker_session_generatorexithandler_ts["GeneratorExitHandler.ts"]
    center -->|"calls"| N_session_generatorexithandler_handlegeneratorexit["handleGeneratorExit[]"]
    center -->|"contains"| N_vendor_claude_mem_src_supervisor_process_registry_ts["process-registry.ts"]
    center -->|"calls"| N_supervisor_process_registry_processregistry_getbysession[".getBySession[]"]
    center -->|"calls"| N_supervisor_process_registry_processregistry_getruntimeprocess[".getRuntimeProcess[]"]
    center -->|"calls"| N_supervisor_process_registry_getprocessregistry["getProcessRegistry[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[.deleteSession()]] - `calls` [INFERRED]
- [[.getBySession()]] - `calls` [EXTRACTED]
- [[.getRuntimeProcess()]] - `calls` [EXTRACTED]
- [[.startSession()]] - `calls` [INFERRED]
- [[ClaudeProvider.ts]] - `imports` [EXTRACTED]
- [[GeneratorExitHandler.ts]] - `imports` [EXTRACTED]
- [[SessionManager.ts]] - `imports` [EXTRACTED]
- [[getProcessRegistry()]] - `calls` [EXTRACTED]
- [[handleGeneratorExit()]] - `calls` [INFERRED]
- [[process-registry.ts]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[getSdkProcessForSession()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None