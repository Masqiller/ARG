---
source_file: "vendor/claude-mem/scripts/generate-changelog.js"
type: "code"
community: "Community None"
degree: 2
location: "L39"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# cleanReleaseBody()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 2

## Architecture Graph
```mermaid
graph LR
    center["cleanReleaseBody[]"]:::centerNode
    center -->|"contains"| N_vendor_claude_mem_scripts_generate_changelog_js["generate-changelog.js"]
    center -->|"calls"| N_scripts_generate_changelog_renderentry["renderEntry[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[generate-changelog.js]] - `contains` [EXTRACTED]
- [[renderEntry()]] - `calls` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[cleanReleaseBody()]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None