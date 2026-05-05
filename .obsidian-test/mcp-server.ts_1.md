---
source_file: "src/mcp-server.ts"
type: "code"
community: "Community None"
degree: 14
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# mcp-server.ts

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 14

## Architecture Graph
```mermaid
graph LR
    center["mcp-server.ts"]:::centerNode
    center -->|"imports_from"| N_src_arg_session_manager_ts["arg-session-manager.ts"]
    center -->|"imports"| N_src_arg_session_manager_argsessionmanager["ARGSessionManager"]
    center -->|"imports_from"| N_src_skill_mapper_ts["skill-mapper.ts"]
    center -->|"imports"| N_src_skill_mapper_recommendskills["recommendSkills[]"]
    center -->|"imports"| N_src_skill_mapper_recommendskillsfortask["recommendSkillsForTask[]"]
    center -->|"imports"| N_src_skill_mapper_getskillpath["getSkillPath[]"]
    center -->|"imports"| N_src_skill_mapper_listallskills["listAllSkills[]"]
    center -->|"imports_from"| N_src_arg_brain_ts["arg-brain.ts"]
    center -->|"imports"| N_src_arg_brain_argbrain["ARGBrain"]
    center -->|"imports_from"| N_src_vibe_router_ts["vibe-router.ts"]
    center -->|"imports"| N_src_vibe_router_viberouter["VibeRouter"]
    center -->|"contains"| N_src_mcp_server_runsafecommand["runSafeCommand[]"]
    center -->|"contains"| N_src_mcp_server_ok["ok[]"]
    center -->|"contains"| N_src_mcp_server_main["main[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[ARGBrain]] - `imports` [EXTRACTED]
- [[ARGSessionManager]] - `imports` [EXTRACTED]
- [[VibeRouter]] - `imports` [EXTRACTED]
- [[arg-brain.ts]] - `imports_from` [EXTRACTED]
- [[arg-session-manager.ts]] - `imports_from` [EXTRACTED]
- [[getSkillPath()]] - `imports` [EXTRACTED]
- [[listAllSkills()]] - `imports` [EXTRACTED]
- [[main()_44]] - `contains` [EXTRACTED]
- [[ok()]] - `contains` [EXTRACTED]
- [[recommendSkills()]] - `imports` [EXTRACTED]
- [[recommendSkillsForTask()]] - `imports` [EXTRACTED]
- [[runSafeCommand()]] - `contains` [EXTRACTED]
- [[skill-mapper.ts]] - `imports_from` [EXTRACTED]
- [[vibe-router.ts]] - `imports_from` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[mcp-server.ts_1]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None