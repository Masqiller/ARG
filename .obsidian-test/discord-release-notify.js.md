---
source_file: "vendor/claude-mem/scripts/discord-release-notify.js"
type: "code"
community: "Community None"
degree: 6
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# discord-release-notify.js

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 6

## Architecture Graph
```mermaid
graph LR
    center["discord-release-notify.js"]:::centerNode
    center -->|"contains"| N_scripts_discord_release_notify_loadenv["loadEnv[]"]
    center -->|"contains"| N_scripts_discord_release_notify_getreleasenotes["getReleaseNotes[]"]
    center -->|"contains"| N_scripts_discord_release_notify_cleannotes["cleanNotes[]"]
    center -->|"contains"| N_scripts_discord_release_notify_truncate["truncate[]"]
    center -->|"contains"| N_scripts_discord_release_notify_posttodiscord["postToDiscord[]"]
    center -->|"contains"| N_scripts_discord_release_notify_main["main[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[cleanNotes()]] - `contains` [EXTRACTED]
- [[getReleaseNotes()]] - `contains` [EXTRACTED]
- [[loadEnv()]] - `contains` [EXTRACTED]
- [[main()_38]] - `contains` [EXTRACTED]
- [[postToDiscord()]] - `contains` [EXTRACTED]
- [[truncate()]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[discord-release-notify.js]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None