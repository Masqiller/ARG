---
source_file: "vendor/claude-mem/scripts/translate-readme/cli.ts"
type: "code"
community: "Community None"
degree: 6
location: "L1"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Community_None
---

# cli.ts

> [!info] Properties
> **File Type**: code
> **Community**: [[_COMMUNITY_Community None|Community None]]
> **Degree**: 6

## Architecture Graph
```mermaid
graph LR
    center["cli.ts"]:::centerNode
    center -->|"imports_from"| N_vendor_claude_mem_scripts_translate_readme_index_ts["index.ts"]
    center -->|"imports"| N_translate_readme_index_translatereadme["translateReadme[]"]
    center -->|"contains"| N_translate_readme_cli_printhelp["printHelp[]"]
    center -->|"contains"| N_translate_readme_cli_printlanguages["printLanguages[]"]
    center -->|"contains"| N_translate_readme_cli_parseargs["parseArgs[]"]
    center -->|"contains"| N_translate_readme_cli_main["main[]"]
    classDef centerNode fill:#4E79A7,stroke:#fff,stroke-width:2px,color:#fff
```

## Outbound Connections
- [[index.ts_14]] - `imports_from` [EXTRACTED]
- [[main()_43]] - `contains` [EXTRACTED]
- [[parseArgs()_3]] - `contains` [EXTRACTED]
- [[printHelp()_3]] - `contains` [EXTRACTED]
- [[printLanguages()]] - `contains` [EXTRACTED]
- [[translateReadme()]] - `imports` [EXTRACTED]

## Inbound Dependencies
> [!abstract]- Files that link here
```dataview
LIST
FROM [[cli.ts_2]]
```

#graphify/code #graphify/EXTRACTED #community/Community_None