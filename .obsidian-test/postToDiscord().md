---
source_file: "vendor/claude-mem/scripts/discord-release-notify.js"
type: "code"
community: "Community None"
degree: 4
location: "L53"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# postToDiscord()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 4

## Architecture Graph
```mermaid
graph LR
    center["postToDiscord[]"]:::centerNode
    center -->|"contains"| N_vendor_claude_mem_scripts_discord_release_notify_js["discord-release-notify.js"]
    center -->|"calls"| N_scripts_discord_release_notify_cleannotes["cleanNotes[]"]
    center -->|"calls"| N_scripts_discord_release_notify_truncate["truncate[]"]
    center -->|"calls"| N_scripts_discord_release_notify_main["main[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[cleanNotes()]] - `calls` [EXTRACTED]
- [[discord-release-notify.js]] - `contains` [EXTRACTED]
- [[main()_38]] - `calls` [EXTRACTED]
- [[truncate()]] - `calls` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[postToDiscord()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None