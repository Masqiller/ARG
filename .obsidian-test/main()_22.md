---
source_file: "vendor/claude-mem/src/services/worker-service.ts"
type: "code"
community: "Community None"
degree: 18
location: "L775"
tags:
  - graphify/code
  - graphify/INFERRED
  - community/Community_None
---

# main()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 18

## Architecture Graph
```mermaid
graph LR
    center["main[]"]:::centerNode
    center -->|"imports_from"| N_vendor_claude_mem_src_cli_claude_md_commands_ts["claude-md-commands.ts"]
    center -->|"calls"| N_cli_claude_md_commands_generateclaudemd["generateClaudeMd[]"]
    center -->|"calls"| N_cli_claude_md_commands_cleanclaudemd["cleanClaudeMd[]"]
    center -->|"imports_from"| N_vendor_claude_mem_src_cli_hook_command_ts["hook-command.ts"]
    center -->|"calls"| N_cli_hook_command_hookcommand["hookCommand[]"]
    center -->|"calls"| N_shared_worker_utils_getworkerport["getWorkerPort[]"]
    center -->|"contains"| N_vendor_claude_mem_src_services_worker_service_ts["worker-service.ts"]
    center -->|"calls"| N_services_worker_service_workerservice_start[".start[]"]
    center -->|"calls"| N_services_worker_service_ensureworkerstarted["ensureWorkerStarted[]"]
    center -->|"calls"| N_infrastructure_healthmonitor_httpshutdown["httpShutdown[]"]
    center -->|"calls"| N_infrastructure_healthmonitor_waitforportfree["waitForPortFree[]"]
    center -->|"calls"| N_infrastructure_processmanager_getplatformtimeout["getPlatformTimeout[]"]
    center -->|"calls"| N_infrastructure_processmanager_spawndaemon["spawnDaemon[]"]
    center -->|"calls"| N_integrations_cursorhooksinstaller_handlecursorcommand["handleCursorCommand[]"]
    center -->|"calls"| N_integrations_geminiclihooksinstaller_handlegeminiclicommand["handleGeminiCliCommand[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[.start()]] - `calls` [EXTRACTED]
- [[adoptMergedWorktrees()]] - `calls` [INFERRED]
- [[claude-md-commands.ts]] - `imports_from` [EXTRACTED]
- [[cleanClaudeMd()]] - `calls` [INFERRED]
- [[ensureWorkerStarted()_1]] - `calls` [EXTRACTED]
- [[generateClaudeMd()]] - `calls` [INFERRED]
- [[getPlatformTimeout()]] - `calls` [INFERRED]
- [[getWorkerPort()]] - `calls` [INFERRED]
- [[handleCursorCommand()]] - `calls` [INFERRED]
- [[handleGeminiCliCommand()]] - `calls` [INFERRED]
- [[hook-command.ts]] - `imports_from` [EXTRACTED]
- [[hookCommand()]] - `calls` [INFERRED]
- [[httpShutdown()]] - `calls` [INFERRED]
- [[runOneTimeV12_4_3Cleanup()]] - `calls` [INFERRED]
- [[spawnDaemon()]] - `calls` [INFERRED]
- [[verifyPidFileOwnership()]] - `calls` [INFERRED]
- [[waitForPortFree()]] - `calls` [INFERRED]
- [[worker-service.ts]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[main()_22]]
```

#graphify/code #graphify/INFERRED #community/Community_None