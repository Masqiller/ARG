---
source_file: "vendor/claude-mem/plugin/scripts/worker-cli.js"
type: "code"
community: "Community None"
degree: 48
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# worker-cli.js

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 48

## Architecture Graph
```mermaid
graph LR
    center["worker-cli.js"]:::centerNode
    center -->|"contains"| N_scripts_worker_cli_constructor["constructor[]"]
    center -->|"contains"| N_scripts_worker_cli_getlevel["getLevel[]"]
    center -->|"contains"| N_scripts_worker_cli_correlationid["correlationId[]"]
    center -->|"contains"| N_scripts_worker_cli_sessionid["sessionId[]"]
    center -->|"contains"| N_scripts_worker_cli_formatdata["formatData[]"]
    center -->|"contains"| N_scripts_worker_cli_formattool["formatTool[]"]
    center -->|"contains"| N_scripts_worker_cli_formattimestamp["formatTimestamp[]"]
    center -->|"contains"| N_scripts_worker_cli_log["log[]"]
    center -->|"contains"| N_scripts_worker_cli_debug["debug[]"]
    center -->|"contains"| N_scripts_worker_cli_info["info[]"]
    center -->|"contains"| N_scripts_worker_cli_warn["warn[]"]
    center -->|"contains"| N_scripts_worker_cli_error["error[]"]
    center -->|"contains"| N_scripts_worker_cli_datain["dataIn[]"]
    center -->|"contains"| N_scripts_worker_cli_dataout["dataOut[]"]
    center -->|"contains"| N_scripts_worker_cli_success["success[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[H()]] - `contains` [EXTRACTED]
- [[N()]] - `contains` [EXTRACTED]
- [[R()]] - `contains` [EXTRACTED]
- [[W()]] - `contains` [EXTRACTED]
- [[Z()]] - `contains` [EXTRACTED]
- [[constructor()_3]] - `contains` [EXTRACTED]
- [[correlationId()]] - `contains` [EXTRACTED]
- [[dataIn()]] - `contains` [EXTRACTED]
- [[dataOut()]] - `contains` [EXTRACTED]
- [[debug()]] - `contains` [EXTRACTED]
- [[error()]] - `contains` [EXTRACTED]
- [[escapePowerShellString()]] - `contains` [EXTRACTED]
- [[failure()]] - `contains` [EXTRACTED]
- [[formatData()]] - `contains` [EXTRACTED]
- [[formatTimestamp()]] - `contains` [EXTRACTED]
- [[formatTool()_1]] - `contains` [EXTRACTED]
- [[formatUptime()_1]] - `contains` [EXTRACTED]
- [[get()]] - `contains` [EXTRACTED]
- [[getAllDefaults()]] - `contains` [EXTRACTED]
- [[getBool()]] - `contains` [EXTRACTED]
- [[getInt()]] - `contains` [EXTRACTED]
- [[getLevel()]] - `contains` [EXTRACTED]
- [[getLogFilePath()]] - `contains` [EXTRACTED]
- [[getPidInfo()]] - `contains` [EXTRACTED]
- [[getPortFromSettings()]] - `contains` [EXTRACTED]
- [[happyPathError()]] - `contains` [EXTRACTED]
- [[info()]] - `contains` [EXTRACTED]
- [[isBunAvailable()]] - `contains` [EXTRACTED]
- [[isProcessAlive()_1]] - `contains` [EXTRACTED]
- [[isRunning()]] - `contains` [EXTRACTED]
- [[loadFromFile()]] - `contains` [EXTRACTED]
- [[log()]] - `contains` [EXTRACTED]
- [[pt()]] - `contains` [EXTRACTED]
- [[removePidFile()_1]] - `contains` [EXTRACTED]
- [[restart()]] - `contains` [EXTRACTED]
- [[sessionId()]] - `contains` [EXTRACTED]
- [[start()]] - `contains` [EXTRACTED]
- [[startWithBun()]] - `contains` [EXTRACTED]
- [[status()_1]] - `contains` [EXTRACTED]
- [[stop()]] - `contains` [EXTRACTED]
- [[success()]] - `contains` [EXTRACTED]
- [[timing()]] - `contains` [EXTRACTED]
- [[tryHttpShutdown()]] - `contains` [EXTRACTED]
- [[waitForExit()_1]] - `contains` [EXTRACTED]
- [[waitForHealth()_2]] - `contains` [EXTRACTED]
- [[waitForWorkerDown()]] - `contains` [EXTRACTED]
- [[warn()]] - `contains` [EXTRACTED]
- [[writePidFile()_1]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[worker-cli.js]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None