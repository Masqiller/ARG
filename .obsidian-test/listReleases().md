---
source_file: "vendor/claude-mem/scripts/generate-changelog.js"
type: "code"
community: "Community None"
degree: 3
location: "L26"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# listReleases()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 3

## Architecture Graph
```mermaid
graph LR
    center["listReleases[]"]:::centerNode
    center -->|"contains"| N_vendor_claude_mem_scripts_generate_changelog_js["generate-changelog.js"]
    center -->|"calls"| N_scripts_generate_changelog_exec["exec[]"]
    center -->|"calls"| N_scripts_generate_changelog_main["main[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[exec()]] - `calls` [EXTRACTED]
- [[generate-changelog.js]] - `contains` [EXTRACTED]
- [[main()_33]] - `calls` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[listReleases()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None