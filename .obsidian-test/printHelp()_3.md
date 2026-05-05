---
source_file: "vendor/claude-mem/scripts/translate-readme/cli.ts"
type: "code"
community: "Community None"
degree: 2
location: "L20"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# printHelp()

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 2

## Architecture Graph
```mermaid
graph LR
    center["printHelp[]"]:::centerNode
    center -->|"contains"| N_vendor_claude_mem_scripts_translate_readme_cli_ts["cli.ts"]
    center -->|"calls"| N_translate_readme_cli_main["main[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[cli.ts_2]] - `contains` [EXTRACTED]
- [[main()_43]] - `calls` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[printHelp()_3]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None