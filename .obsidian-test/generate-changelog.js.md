---
source_file: "vendor/claude-mem/scripts/generate-changelog.js"
type: "code"
community: "Community None"
degree: 9
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# generate-changelog.js

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 9

## Architecture Graph
```mermaid
graph LR
    center["generate-changelog.js"]:::centerNode
    center -->|"contains"| N_scripts_generate_changelog_exec["exec[]"]
    center -->|"contains"| N_scripts_generate_changelog_listreleases["listReleases[]"]
    center -->|"contains"| N_scripts_generate_changelog_fetchreleasebody["fetchReleaseBody[]"]
    center -->|"contains"| N_scripts_generate_changelog_formatdate["formatDate[]"]
    center -->|"contains"| N_scripts_generate_changelog_cleanreleasebody["cleanReleaseBody[]"]
    center -->|"contains"| N_scripts_generate_changelog_extractversion["extractVersion[]"]
    center -->|"contains"| N_scripts_generate_changelog_renderentry["renderEntry[]"]
    center -->|"contains"| N_scripts_generate_changelog_readexistingchangelog["readExistingChangelog[]"]
    center -->|"contains"| N_scripts_generate_changelog_main["main[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[cleanReleaseBody()]] - `contains` [EXTRACTED]
- [[exec()]] - `contains` [EXTRACTED]
- [[extractVersion()]] - `contains` [EXTRACTED]
- [[fetchReleaseBody()]] - `contains` [EXTRACTED]
- [[formatDate()_3]] - `contains` [EXTRACTED]
- [[listReleases()]] - `contains` [EXTRACTED]
- [[main()_33]] - `contains` [EXTRACTED]
- [[readExistingChangelog()]] - `contains` [EXTRACTED]
- [[renderEntry()]] - `contains` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[generate-changelog.js]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None