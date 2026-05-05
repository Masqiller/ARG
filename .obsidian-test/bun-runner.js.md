---
source_file: "vendor/claude-mem/plugin/scripts/bun-runner.js"
type: "code"
community: "Community None"
degree: 5
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# bun-runner.js

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 5

## Architecture Graph
```mermaid
graph LR
    center["bun-runner.js"]:::centerNode
    center -->|"contains"| N_scripts_bun_runner_fixbrokenscriptpath["fixBrokenScriptPath[]"]
    center -->|"contains"| N_scripts_bun_runner_findbun["findBun[]"]
    center -->|"contains"| N_scripts_bun_runner_isplugindisabledinclaudesettings["isPluginDisabledInClaudeSettings[]"]
    center -->|"contains"| N_scripts_bun_runner_collectstdin["collectStdin[]"]
    center -->|"contains"| N_scripts_bun_runner_quote["quote[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[collectStdin()]] - `contains` [EXTRACTED]
- [[findBun()]] - `contains` [EXTRACTED]
- [[fixBrokenScriptPath()]] - `contains` [EXTRACTED]
- [[isPluginDisabledInClaudeSettings()_1]] - `contains` [EXTRACTED]
- [[quote()]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[bun-runner.js]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None